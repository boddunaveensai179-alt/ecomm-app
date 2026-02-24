import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Products1() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  const storedProducts = JSON.parse(localStorage.getItem("products"));

  if (storedProducts && storedProducts.length > 0) {
    setProducts(storedProducts);
  } else {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        localStorage.setItem(
          "products",
          JSON.stringify(res.data.products)
        );
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
      });
  }
}, []);


  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // 🚨 First check login
    if (!isLoggedIn) {
      alert("Please login first!");
      navigate("/login");
      return; // STOP execution
    }

    // ✅ Then add to cart
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];

    cartData.push(product);

    localStorage.setItem("cart", JSON.stringify(cartData));

    navigate("/cart");
  };

  return (
    <>
      <Header />

      <section className="products">
        {products.map((p) => (
          <div className="product" key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ${p.price}</p>
            <button onClick={() => handleAddToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default Products1;
