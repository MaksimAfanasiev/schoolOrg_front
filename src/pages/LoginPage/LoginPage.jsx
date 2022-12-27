import { useState } from "react";
import { userLogin } from "../../redux/operations/userOperations";
import { useDispatch } from "react-redux";
import axios from "axios";

export const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [group, setGroup] = useState("");
  const [password, setPassword] = useState("");

  console.log(axios.defaults.headers.common.Authorization);

  const dispatch = useDispatch();

  const onInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "secondName":
        setSecondName(value);
        break;
      case "group":
        setGroup(value);
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

    const userData = {
      firstName,
      secondName,
      group,
      password,
    };

    dispatch(userLogin(userData));

    setFirstName("");
    setSecondName("");
    setGroup("");
    setPassword("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        First Name
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Last Name
        <input
          name="secondName"
          type="text"
          value={secondName}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Group
        <input
          name="group"
          type="text"
          value={group}
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
