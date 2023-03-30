// import { ActionTypes } from "./ActionTypes"

export const AllstoryAction = (item) => {
    return {
      type: "ALL_STORY",
      payload: item,
    };
}
export const UserAction = (users) => {
    return {
      type: "USERS",
      payload: users,
    };
}
export const CommentAction = (comment) => {
    return {
      type: "COMMENT",
      payload: comment,
    };
}