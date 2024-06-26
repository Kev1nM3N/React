import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user">
              <Link to={`${user.id}`}>
                <div className="user-card">
                  <div className="user-card__container">
                    <h3>{user.name}</h3>
                    <p>
                      <b>Email:</b> {user.email}
                    </p>
                    <p>
                      <b>Phone:</b> {user.phone}
                    </p>
                    <p>
                      <b>Website:</b>
                      {user.website}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
