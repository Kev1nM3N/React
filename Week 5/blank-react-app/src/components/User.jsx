import React from "react";

function User({id, name, username, email }) {
  return (
    <div key={id} style={{ border: "2px solid", color: "red" }}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
    </div>
  );
}

export default User;
