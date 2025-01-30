import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:postId" element={<Post />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
