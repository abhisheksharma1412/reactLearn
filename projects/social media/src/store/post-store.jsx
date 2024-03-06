import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducerPost = (currPost, action) => {
  let newPost = currPost;

  if (action.type === "DELETE_POST") {
    newPost = currPost.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_POST") {
    newPost = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPost = [action.payload, ...currPost];
  }
  return newPost;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPost] = useReducer(reducerPost, []);
  // const [fetching, setfetching] = useState(false);

  const addPost = (post) => {
    dispatchPost({
      type: "ADD_POST",
      payload: post,
    });
  };
  // const addPosts = (posts) => {
  //   dispatchPost({
  //     type: "ADD_INITIAL_POST",
  //     payload: {
  //       posts,
  //     },
  //   });
  // };

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   setfetching(true);
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addPosts(data.posts);
  //       setfetching(false);
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const deletePost = (postId) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPost(deletePostAction);
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
