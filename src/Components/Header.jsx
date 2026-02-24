import { Link, useNavigate } from "react-router-dom";

function Header() {
  const name = localStorage.getItem("username");
  const navigate=useNavigate();
  const handleLogout=()=>{

 
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");

    navigate("/");
  };
  return (
    <header>
      <h1>🛍️ MyShop KL University</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products1">Products</Link>
        <Link to="/cart">Cart</Link>
        {name ?<button onClick={handleLogout}>Logout</button>:null}
      </nav>
      {/* <div id="user-display">Welcome, User</div> */}
    <div id="user-display">
        {name ? `Welcome, ${name}` : ""}
      </div>
      
    </header>
  );
}

export default Header;