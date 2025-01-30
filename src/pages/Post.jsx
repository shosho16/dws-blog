import PostDetails from "../component/PostDetails/PostDetails";
import { useParams } from "react-router";

export const Post = () => {
  const params = useParams();
  const userId = params.postId.substring(1, 40);

  return <PostDetails message={userId} />;
};
