import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/selectors/userSelectors";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/operations/userOperations";

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // const onLogoutClick = (e) => {};

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
                  <NavLink to={"/planner"}>Planner</NavLink>
                </li>
                <li>
                  <NavLink to={"/account"}>Account</NavLink>
                </li>
                <li>
                  <button type="button" onClick={() => dispatch(userLogout())}>
                    Logout
                  </button>
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
