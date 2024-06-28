// Login.jsx

import React from 'react';

const Login = () => {
  // Your login component code here
  return (
    <div>
      {/* Login form and logic */}
      <h1>Login</h1>
      {/* Example form */}
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login; // Ensure you export the component as default
