import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo className="logo" />
        </Link>
      </div>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
