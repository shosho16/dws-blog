const initialState = {
  search: "",
};

const Search = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH":
      return {
        search: action.name,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Search;
