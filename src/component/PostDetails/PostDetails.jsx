import { useEffect, useState } from "react";
import "./PostDetails.css";
import { useNavigate } from "react-router";
import Nav from "../Nav/Nav";
const PostDetails = ({ message }) => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [postInfo, setPostInfo] = useState({
    id: "",
    title: "",
    content: "",
    thumbnail_url: "",
    authorId: "",
    createdAt: "",
    updatedAt: "",
    categories: [
      {
        id: "",
        name: "",
        createdAt: "",
        updatedAt: "",
        postId: "",
      },
    ],
    author: {
      id: "",
      name: "",
      profilePicture: "",
      createdAt: "",
      updatedAt: "",
    },
  });

  useEffect(() => {
    fetch(`https://tech-test-backend.dwsbrazil.io/posts/${message}`)
      .then((results) => results.json())
      .then((data) => {
        setPostInfo(data);
      });
  }, [message]);

  useEffect(() => {
    fetch("https://tech-test-backend.dwsbrazil.io/posts/")
      .then((results) => results.json())
      .then((data) => {
        let sorted = data.sort(function (a, b) {
          return a.createdAt < b.createdAt
            ? -1
            : a.createdAt > b.createdAt
            ? 1
            : 0;
        });
        setLatestPosts(sorted.slice(0, 3));
      });
  }, []);

  console.log(latestPosts);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="post">
        <div className="back-button-container">
          <button className="back-button" onClick={() => navigate(`/`)}>
            Back
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="title">{postInfo.title}</div>
          <div className="author-info">
            <img className="author-img" src={postInfo.author.profilePicture} />
            <div className="author-name-date">
              <div className="author-name">
                Written by: <b>{postInfo.author.name}</b>
              </div>
              <div className="author-date">
                {postInfo.author.createdAt.substring(0, 10)}
              </div>
            </div>
          </div>
          <img className="post-img" src={postInfo.thumbnail_url} />
          <span className="post-text">{postInfo.content}</span>
        </div>
      </div>
      <div className="latest-articles">
        <span className="latest-articles-title">Latest Articles</span>
        <div className="latest-articles-container">
          {latestPosts.map((post, index) => {
            return (
              <div className="article" key={index}>
                <img
                  className="article-image"
                  onClick={() =>
                    navigate(`/post/:${post.id}`)
                  }
                  src={post.thumbnail_url}
                  alt=""
                />
                <div className="article-body">
                  <div className="article-info">
                    <div className="article-date-author">
                      <div className="article-date">
                        {post.createdAt.substring(0, 10)}
                      </div>
                      <div className="article-author">{post.author.name}</div>
                    </div>
                  </div>
                  <div className="article-title">{post.title}</div>
                  <div className="article-description">
                    {post.content.substring(0, 70)}...
                  </div>
                  <div className="article-categories">
                    {post.categories.map((category, index) => {
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
      </div>
    </div>
  );
};

export default PostDetails;
