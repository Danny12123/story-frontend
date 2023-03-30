

const initialState = {
    users: []
}
export const Users = (state = initialState, { type, payload }) => {
  switch (type) {
    case "USERS":
      return { ...state, users: payload };
    default:
      return state;
  }
};
