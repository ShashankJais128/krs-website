import React, { useState } from "react";
import Line from "../components/About/Line";

function Signin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && <div>{errorMessages.message}</div>;

  // JSX code for login form
  const renderForm = (
    <div className="flex justify-center">
    <div className="w-full max-w-xs ">
      <text className="block text-black text-3xl font-bold mb-2 text-center">Sign in</text>
      <br></br>
      <Line color="black" width="100%" />
      <br></br>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-5"
      >
        
        <div className="mb-4">
          <label className="block text-blue-900 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            name="uname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="mb-6">
          <label className="block text-blue-900 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="pass"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-900 hover:text-blue-900"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
    </div>
  );

  return (
    <div>
      <div>
        <div>Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Signin;
