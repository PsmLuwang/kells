import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import MyCodes from "./pages/MyCodes"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import Order from "./pages/Order"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/myCodes" element={<MyCodes/>} />
        {/* <Route path="/support" element={<Support/>} /> */}
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products/:id" element={<Products/>} />
      </Routes>
    </>
  )
}

export default App
