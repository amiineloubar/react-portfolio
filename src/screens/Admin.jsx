import React from "react";

function Admin() {
  return (
    <form className="container admin-login-form mt-5">
      <div className="form-group">
        <label for="inputEmail">Email</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label className="mt-2" for="inputPassword">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label className="form-check-label mt-2">
          <input type="checkbox" /> Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Sign in
      </button>
    </form>
  );
}

export default Admin;
