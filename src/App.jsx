import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import "./Components/styles.css"
import Products from "./Components/Products"
import Cart from "./Components/Cart"
import Login from "./Components/Login"
import Products1 from "./Components/Products1"
import Signup from "./Components/Signup"
import ApproveOrders from "./Components/ApproveOrders"

function App(){
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("role") || "user";

  return(
    <>
    <HashRouter>
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn && role === "admin"
            ? <Navigate to="/admin/approve-orders" replace />
            : <Home />
        }
      />
      <Route
        path="/products"
        element={
          isLoggedIn && role === "admin"
            ? <Navigate to="/admin/approve-orders" replace />
            : <Products />
        }
      />
      <Route
        path="/cart"
        element={
          isLoggedIn && role === "admin"
            ? <Navigate to="/admin/approve-orders" replace />
            : <Cart />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/Products1"
        element={
          isLoggedIn && role === "admin"
            ? <Navigate to="/admin/approve-orders" replace />
            : <Products1 />
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/admin/approve-orders"
        element={
          isLoggedIn && role === "admin"
            ? <ApproveOrders />
            : <Navigate to="/" replace />
        }
      />
    </Routes>
    </HashRouter>
    </>
  )
}
export default App
