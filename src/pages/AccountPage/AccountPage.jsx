import {
  selectUser,
  selectIsLoggedIn,
} from "../../redux/selectors/userSelectors";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { userCurrent } from "../../redux/operations/userOperations";

export const AccountPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {dispatch(userCurrent())}, [dispatch])

  return isLoggedIn ? (
    <section>
      <ul>
        <li>
          <Link to={"/account/courses"}>My courses</Link>
        </li>
        <li>
          <Link to={"/account/collection"}>My collection</Link>
        </li>
      </ul>

      <div>
        <h2>Description</h2>
        <p>
          {user.firstName} {user.secondName}, puple of {user.group} class.
        </p>
      </div>
      <Outlet/>
    </section>
  ) : (
    <Navigate to={"/"} />
  );
};
