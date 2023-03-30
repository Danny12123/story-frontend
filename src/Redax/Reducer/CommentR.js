

const initialState = {
  comment: [],
};
export const Commentreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "COMMENT":
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
