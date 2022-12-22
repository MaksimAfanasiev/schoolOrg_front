import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isLoggedIn = false;
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            {isLoggedIn ? (
              <div>
                <li>
                  <NavLink to={"/user/planner"}>Planner</NavLink>
                </li>
                <li>
                  <NavLink to={"/user/account"}>Account</NavLink>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
                <li>
                  <NavLink to={"/register"}>Registration</NavLink>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
