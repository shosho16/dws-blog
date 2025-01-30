const initialState = {
  author: "default",
};

const Author = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_AUTHOR":
      return {
        author: action.name,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Author;
