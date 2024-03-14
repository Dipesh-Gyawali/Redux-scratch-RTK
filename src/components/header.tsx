import { Link } from "react-router-dom";
import "./_header.scss";
import { useSelector } from "react-redux";

export const Header = () => {
  const auth = useSelector((state: any) => state.authentication.isAuthenticated);
  console.log(auth, "auth true or false");

  return (
    <>
      <div className="header-container">
        <div className="car">🚗</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          {auth === true ? (
            ""
          ) : (
            <li>
              <Link to="/login">Log in</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

{
  /* <>
<div>
  <ul>
    <li><Link to="/">Home</Link></li>

    {isLoggedIn && <li><Link to="/about">About</Link></li>}
    {isLoggedIn &&<li><Link to="/contactus">Contact Us</Link></li>}
    {!isLoggedIn &&<button onClick={() => setLoggedIn(true)}>Login</button>}
    {isLoggedIn && <button onClick={handleLogOut}>Logout</button>}

  </ul>
</div>
</> */
}
