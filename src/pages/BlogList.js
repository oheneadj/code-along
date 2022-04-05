import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlogList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("/posts.json");
      setPosts(await res.json());
    })();
  }, []);

  const handleClick = (id) => {
    const post = posts[id - 1];

    navigate(`/blog/${post.slug}`, { state: { post } });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "50px auto" }}>
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ display: "flex", margin: "50px 0",
           backgroundColor:"white", padding:"20px", borderRadius: "5px",  
           boxShadow:" 0 2px -4px 1px rgba(0, 0, 0, 0.2)"}}>
            <img
              src={`/images/${post.image}`}
              alt=""
              height={200}
              width={200}
            />
            <div
              style={{
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h3 style={{paddingBottom:"10px"}}>{post.title}</h3>
              <p>{post.extract}</p>

              <button
                className="btn-contain"
                onClick={() => handleClick(post.id)}
                style={{ alignSelf: "end", padding: "10px 15px", backgroundColor: "black", color:"white", border:"none", borderRadius:"5px" }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
