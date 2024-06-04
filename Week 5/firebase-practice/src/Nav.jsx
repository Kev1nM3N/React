import React from "react";

function Nav() {
  return (
    <nav>
      <div className="left-side">
        <button>
          <FontAwesomeIcon icon="bars" />
        </button>

        <figure>
          <img src="./assets/KD-left-transparent-svg.svg" alt="" />
        </figure>
      </div>

      <div className="right-side">
        <button onClick={register}>Register</button>
        <button onClick={logIn}>Login</button>
        <button onClick={logOut}>LogOut</button>
        {/* {loading ? <h1>Loading...</h1> : user.email} */}
      </div>
    </nav>
  );
}

export default Nav;
