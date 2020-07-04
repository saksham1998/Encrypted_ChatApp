import React from "react";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div
        className="ui grid"
        style={{ backgroundColor: "rgb(255, 246, 226)" }}
      >
        <div
          className="ui five wide column middle aligned "
          style={{ margin: "0px 38px" }}
        >
          <div className="ui dividing header middle aligned brown">
            <h1>Register</h1>
          </div>
          <form className="ui form " action="/register" method="POST">
            <div className="required field">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                id="name"
              />
            </div>
            <div className="required field">
              <label for="mail">Email</label>
              <input
                type="email"
                name="mail"
                placeholder="Enter your Email"
                id="mail"
              />
            </div>
            <div className="required field">
              <label for="phoneNo">Phone No.</label>
              <input
                type="text"
                name="phoneNo"
                placeholder="Enter your Phone Number"
                id="phoneNo"
              />
            </div>
            <div className="required field">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                id="password"
              />
            </div>
            <button className="ui button" type="submit">
              Register
            </button>
          </form>
          <br />
          <Link to="/login" style={{ textDecoration: "underline", color: "brown" }}>
            Already a User? Login Here
          </Link>
        </div>
        <div className="ten wide column">
          <img
            className="ui fluid image"
            style={{ height: "100vh" }}
            src="https://previews.123rf.com/images/stockphotoatinat/stockphotoatinat1702/stockphotoatinat170200038/72607538-wood-table-paper-background-template-stationery-book-note-notebook-wooden-pencil-notepad-photo-busin.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
