import {
  selectUser,
  selectIsLoggedIn,
} from "../../redux/selectors/userSelectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const AccountPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return isLoggedIn ? (
    <section>
      <ul>
        <li>
          <Link to={"/courses"}>My courses</Link>
        </li>
        <li>
          <Link to={"/collection"}>My collection</Link>
        </li>
      </ul>

      <div>
        <h2>Description</h2>
        <p>
          {user.firstName} {user.secondName}, puple of {user.group} class.
        </p>
      </div>
    </section>
  ) : (
    <Navigate to={"/"} />
  );
};
