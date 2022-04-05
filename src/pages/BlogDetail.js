import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function BlogDetail() {
  const location = useLocation();
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost(location.state.post);
  }, [location.state]);

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      {post && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            padding: "40px",
            borderRadius:"5px"
          }}
        >
          <h2 style={{ margin: "5px 0", fontSize: "20px" }}>{post.title}</h2>
          <p style={{ margin: "10px 0" }}>{post.extract}</p>
          <img
            src={`/images/${post.image}`}
            style={{ margin: "10px 0" }}
            alt=""
            height={350}
            width="100%"
          />
          <p style={{ margin: "10px 0" }}>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
