const CHANGE_CATEGORY = "CHANGE_CATEGORY";
const CHANGE_AUTHOR = "CHANGE_AUTHOR";
const CHANGE_SEARCH = "CHANGE_SEARCH";

export const changeCategory = (name) => ({
  type: CHANGE_CATEGORY,
  name: name,
});

export const changeAuthor = (name) => ({
  type: CHANGE_AUTHOR,
  name: name,
});

export const changeSearch = (name) => ({
  type: CHANGE_SEARCH,
  name: name,
});
