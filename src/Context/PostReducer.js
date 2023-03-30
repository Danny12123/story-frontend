const PostReducer = (state, action) => {
  switch (action.type) {
    case "POST_SUCCESS":
      return {
        post: action.payload,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default PostReducer;
