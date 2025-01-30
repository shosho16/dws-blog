import { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router";
import { connect } from "react-redux";

const Card = (props) => {
  const [cards, setCards] = useState([]);
  const unfilteredCards = cards.filter((card) =>
    props.Filter.Search.search == ""
      ? card
      : card.title
          .toLowerCase()
          .includes(props.Filter.Search.search.toLowerCase())
  );
  const filteredCards = cards
    .filter((card) =>
      props.Filter.Author.author == "default"
        ? card
        : card.author.name.includes(props.Filter.Author.author)
    )
    .filter((card) =>
      props.Filter.Category.category == "default"
        ? card
        : card.categories.length >= 1
    )
    .filter((card) =>
      props.Filter.Category.category == "default"
        ? card
        : card.categories[0].name.includes(props.Filter.Category.category)
    )
    .filter((card) =>
      props.Filter.Search.search == ""
        ? card
        : card.title
            .toLowerCase()
            .includes(props.Filter.Search.search.toLowerCase())
    );

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://tech-test-backend.dwsbrazil.io/posts/")
      .then((results) => results.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <div className="cards-container">
      {(props.Filter.Category.category == "default" &&
      props.Filter.Author.author == "default"
        ? unfilteredCards
        : filteredCards
      ).map((card, index) => {
        return (
          <div key={index} className="card">
            <img
              className="card-image"
              onClick={() => navigate(`post/:${card.id}`)}
              src={`${card.thumbnail_url}`}
            />
            <div className="card-body">
              <div className="card-info">
                <div className="card-date-author">
                  <div className="card-date">
                    {card.createdAt.substring(0, 10)}
                  </div>
                  <div className="card-author">{card.author.name}</div>
                </div>
              </div>
              <div className="card-title">{card.title}</div>
              <div className="card-description">
                {card.content.substring(0, 100)}...
              </div>
              <div className="card-categories">
                {card.categories.map((category, index) => {
                  return (
                    <div className="category" key={index}>
                      {category.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  Filter: state,
});

export default connect(mapStateToProps)(Card);
