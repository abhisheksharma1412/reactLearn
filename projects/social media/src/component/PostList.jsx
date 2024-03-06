// import { useContext } from "react";
import Post from "./Post";
// import { PostListContext } from "../store/post-store";
import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList, fetching } = useContext(PostListContext);
  const postList = useLoaderData();
  return (
    <>
      {/* {fetching && <LoadingSpinner></LoadingSpinner>} */}
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export const postLoader = async () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
