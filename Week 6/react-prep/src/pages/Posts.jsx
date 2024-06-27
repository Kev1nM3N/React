import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Posts() {
  const { id } = useParams();
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [searchId, setSearchId] = useState(id)

  function onSearch(params) {
    fetchPosts(searchId)
  }

  async function fetchPosts(userId) {
    setLoading(true)
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`
    );
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
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
            <input type="number" onKeyDown={(event) => event.key === 'Enter' && onSearch()} value={searchId}
             onChange={(event) => setSearchId(event.target.value)}/>
            <button onClick={() => onSearch()}>Enter</button>
          </div>
        </div>

        {loading ? (
          new Array(10).fill(0).map((element, index) => (
            <div key={index} className="post">
            <div className="post__title">
              <div className="post__title--skeleton"></div>
            </div>
            <div className="post__body">
              <p className="post__body--skeleton"></p>
            </div>
          </div>
          ))  
        ) : (
          post.map((element, index) => (
            <div key={index} className="post">
              <div className="post__title">{element.title}</div>
              <p className="post__body">{element.body}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Posts;
