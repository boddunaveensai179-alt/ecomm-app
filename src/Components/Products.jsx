

import { useNavigate } from "react-router-dom";
import mobile from "../image/iphone.jpeg"
import Footer from "./Footer";
import Header from "./Header";

function Products() {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn=="true") {
      navigate("/cart");
    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };
  return (
    <>
    <Header/>
    <section className="products">
      <div className="product">
        <img src={mobile} alt="Product 1" />
        <h3>Product 1</h3>
        <p>$20.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div className="product">
        <img src={mobile} alt="Product 2" />
        <h3>Product 2</h3>
        <p>$35.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div className="product">
        <img src={mobile} alt="Product 3" />
        <h3>Product 3</h3>
        <p>$45.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </section>
     <Footer/>
    </>
   
  );
}

export default Products;
