const initialState = {
  category: "default",
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        category: action.name,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Category;
