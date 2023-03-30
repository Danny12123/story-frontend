import { ActionTypes } from "../ActionTypes";

const initialState = {
  data: [],
};
export const AllStory = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_STORY":
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
