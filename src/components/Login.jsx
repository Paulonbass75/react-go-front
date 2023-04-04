import React from "react";
import { useState } from "react";
import Input from "./form/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
        e.preventDefault();
        return [email, password]
  };
  
  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"  
          name="email"
          autocomplete="email-new"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autocomplete="password-new"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}
