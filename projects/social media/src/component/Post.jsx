import { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PostListContext } from "../store/post-store";

function Post({ post }) {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card eachpost" style={{ width: "30rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <RiDeleteBin5Fill />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary postTag" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-info postAlert" role="alert">
          This post is liked by {post.reactions} people
        </div>
      </div>
    </div>
  );
}

export default Post;
