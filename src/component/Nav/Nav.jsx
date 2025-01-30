import { connect, useDispatch } from "react-redux";
import { changeSearch } from "../../redux/actions";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router";
import "./Nav.css";

const Nav = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchAndRedirect = function () {
    dispatch(changeSearch(search));
    navigate("/");
  };

  return (
    <div className="navBar">
      <div className="search-container">
        <input
          className="search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
        />
        <button className="search-button" onClick={() => searchAndRedirect()}>
          <FaMagnifyingGlass />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Filter: state,
});

export default connect(mapStateToProps)(Nav);
