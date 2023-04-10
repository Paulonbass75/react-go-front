import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Input from "./form/input";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();
  const { setAlertClassName } = useOutletContext();
  const { setAlertMessage } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email/pass", email, password);
    // return [email, password];

    if (email === "admin@test.com") {
      setJwtToken("admin");
      setAlertClassName("d-none");
      setAlertMessage("");
      navigate("/");
    } else {
      setAlertClassName("alert alert-danger");
      setAlertMessage("Invalid email/password");
    }
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
        <hr />

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </div>
  );
}
