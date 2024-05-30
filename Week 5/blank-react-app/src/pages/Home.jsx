import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";
//"https://jsonplaceholder.typicode.com/users"

function Home() {
  const [users, setUsers] = useState([]);

  async function main(params) {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(data);
  }
  useEffect(() => {
    main();
  }, []);

  return (
    <>
      {users.map((user) => {
        return (
        <Link to={`/users/${user.id}`} key={user.id} >
            <User 
            id={user.id} 
            name={user.name} 
            email={user.email} 
            username={user.username}
        />        
        </Link>
        );
      })}
    </>
  );
}

export default Home;
