import { NavLink } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/user/planner"}>Planner</NavLink>
            </li>
            <li>
              <NavLink to={"/user/account"}>Account</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Registration</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
