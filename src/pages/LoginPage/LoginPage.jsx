import { useState } from "react";

export const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "login":
        setLogin(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      login,
      password,
    };
    console.log(loginData);

    setLogin("");
    setPassword("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Login
        <input
          name="login"
          type="text"
          value={login}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={onInputChange}
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
