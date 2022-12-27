import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/operations/userOperations";

export const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [group, setGroup] = useState("");
  const [password, setPassword] = useState("");

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

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      firstName,
      secondName,
      group,
      password,
    };

    dispatch(userRegister(registerData));

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
        Second Name
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
      <button type="submit">Sing up</button>
    </form>
  );
};
