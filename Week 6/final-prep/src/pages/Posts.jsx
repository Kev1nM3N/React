import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchId, setSearchId] = useState(id)

  async function main(userId) {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`
    );
    setPosts(data);
    setLoading(false);
  }

  function onSearch () {
    main(searchId);
  }

  useEffect(() => {
    main();
  }, []);

  return (
    <>
      <div>
        <div className="post__search">
          <Link to="/">
            <button>← Back</button>
          </Link>
          <div className="post__search--container">
            <label className="post__search--label">Search by Id</label>
            <input 
              type="number" 
              value={searchId} 
              onChange={(event) => setSearchId(event.target.value)}
              onKeyDown={(event) => event.key === `Enter` && onSearch()}
              />
            <button onClick={() => onSearch()}>Enter</button>
          </div>
        </div>
        {loading
          ? new Array(10).fill(0).map((element, index) => (
              <div className="post" key={index}>
                <div className="post__title">
                  <div className="post__title--skeleton"></div>
                </div>
                <div className="post__body">
                  <p className="post__body--skeleton"></p>
                </div>
              </div>
            ))
          : posts.map((post) => (
              <div className="post" key={post.id}>
                <div className="post__title">{post.title}</div>
                <p className="post__body">{post.body}</p>
              </div>
            ))}
      </div>
    </>
  );
}

export default Posts;
