import "./Filters.css";
import { useState, useEffect } from "react";
import {
  changeAuthor,
  changeCategory,
  changeSearch,
} from "../../redux/actions";
import { connect, useDispatch } from "react-redux";

const Filters = (props) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categoryFilterSelect, setCategoryFilterSelect] = useState("default");
  const [authorFilterSelect, setAuthorFilterSelect] = useState("default");

  const checkFilters = function () {
    if (
      authorFilterSelect == "default" &&
      categoryFilterSelect == "default" &&
      props.Filter.Search.search.toLowerCase() == ""
    ) {
      dispatch(changeSearch(""));
    }
  };

  useEffect(() => {
    fetch("https://tech-test-backend.dwsbrazil.io/categories/")
      .then((results) => results.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://tech-test-backend.dwsbrazil.io/authors/")
      .then((results) => results.json())
      .then((data) => {
        setAuthors(data);
      });
  }, []);

  return (
    <div className="filters-container">
      <div className="desktop-filters-container">
        <span className="desktop-filters-container-title">Filters</span>
        <div style={{ marginTop: "24px" }} className="title">
          Category
        </div>
        <div className="filter-option-container">
          {categories.map((category, index) => {
            return (
              <div
                onClick={() => {
                  categoryFilterSelect == category.name
                    ? setCategoryFilterSelect("default")
                    : setCategoryFilterSelect(category.name);
                }}
                className={`desktop-filter ${
                  categoryFilterSelect == category.name ? "active" : null
                }`}
                key={index}
              >
                {category.name}
              </div>
            );
          })}
        </div>
        <div className="title">Author</div>
        <div className="filter-option-container">
          {authors.map((author, index) => {
            return (
              <div
                onClick={() => {
                  authorFilterSelect == author.name
                    ? setAuthorFilterSelect("default")
                    : setAuthorFilterSelect(author.name);
                }}
                className={`desktop-filter ${
                  authorFilterSelect == author.name ? "active" : null
                }`}
                key={index}
              >
                {author.name}
              </div>
            );
          })}
        </div>
        <button
          className="filter-button"
          onClick={() => {
            dispatch(changeCategory(categoryFilterSelect)),
              dispatch(changeAuthor(authorFilterSelect)),
              checkFilters();
          }}
        >
          Apply Filters
        </button>
      </div>
      <div className="mobile-filters-container">
        <div className="dropdown">
          <select
            className={`toggle`}
            onChange={(e) => dispatch(changeCategory(e.target.value))}
            defaultValue="default"
          >
            <option value="default">Category</option>
            {categories.map((category, index) => {
              return (
                <option className="option" key={index}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="dropdown">
          <select
            className={`toggle`}
            onChange={(e) => dispatch(changeAuthor(e.target.value))}
            defaultValue="default"
          >
            <option value="default">Author</option>
            {authors.map((author, index) => {
              return <option key={index}>{author.name}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Filter: state,
});

export default connect(mapStateToProps)(Filters);
