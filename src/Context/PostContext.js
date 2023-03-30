import { createContext, useEffect, useReducer } from "react";
import PostReducer from "./PostReducer";


const INITIAL_STATE = {
  // JSON.parse(localStorage.getItem("user")) ||
  post:  null,
  isFetching: false,
  error: false,
};

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(state.post));
  }, [state.post]);

  return (
    <PostContext.Provider
      value={{
        post: state.post,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
