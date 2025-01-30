import Filters from "../component/Filters/Filters.jsx";
import Card from "../component/Card/Card.jsx";
import Nav from "../component/Nav/Nav.jsx";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <Nav />

      <div className="home">
        <Filters />
        <Card />
      </div>
    </div>
  );
};
