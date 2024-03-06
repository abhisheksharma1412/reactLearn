import { useContext } from "react";
import { PostListContext } from "../store/post-store";
import { Form, redirect } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostListContext);
  return (
    <Form method="POST" className="createPost">
      <div className="mb-3">
        <label htmlFor="exampleIputEmail1" className="form-label">
          UserId
        </label>
        <input
          name="userId"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleIputEmail1" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleIputEmail1" className="form-label">
          Write Something
        </label>
        <textarea
          rows={4}
          type="text"
          name="body"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="what are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleIputEmail1" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleIputEmail1" className="form-label">
          Tags
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="please write your tags with space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
}

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      //addPost(post);
      console.log(post);
    });
  return redirect("/");
};

export default CreatePost;
