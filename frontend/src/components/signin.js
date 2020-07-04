import React from "react";
import {Link} from "react-router-dom"

const Signin = () => {
  return (
    <div>
      <div class="ui grid" style={{backgroundColor:"whitesmoke"}}>
        <div class="nine wide column">
          <img
            class="ui fluid image"
            style={{height: "100vh"}}
            src="https://i.pinimg.com/originals/c1/d6/62/c1d66216c70d084812df346698dda3db.jpg"
            alt=""
          />
        </div>
        <div
          class="ui five wide column middle aligned "
          style={{marginLeft:"30px"}}
        >
          <div class="ui dividing header middle aligned blue">
            <h1>Sign In</h1>
          </div>
          <form class="ui form " action="/" method="POST">
            <div class="required field">
              <label for="mail">Email</label>
              <input
                type="email"
                name="mail"
                placeholder="Enter your Email"
                id="mail"
              />
            </div>
            <div class="required field">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                id="password"
              />
            </div>
            <button class="ui button" type="submit">
              Submit
            </button>
          </form>
          <br />
          <Link to="/" style={{textDecoration: "underline"}}>
            New User? Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
