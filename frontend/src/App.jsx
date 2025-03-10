import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import MyCodes from "./pages/MyCodes"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import Order from "./pages/Order"
import AdminDashboard from "./pages/adminPages/AdminDashboard"
import AdminProduct from "./pages/adminPages/AdminProduct"


import { Navigate, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import EmailVerification from "./pages/EmailVerification"
import ForgotPassword from "./pages/ForgotPassword"
import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast"
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";


// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};
function App() { 
  const { isCheckingAuth, checkAuth } = useAuthStore();

	// useEffect(() => {
	// 	checkAuth();
	// }, [checkAuth]);

	// if (isCheckingAuth) return <LoadingSpinner />;
  return (
    <>
      <Routes>
        <Route path="/" 
          element={
            <>
              <Header />
              <Home/>
            </>
          } 
        />

        <Route path="/signUp" 
          element={
            <RedirectAuthenticatedUser>
              <SignUp/>
            </RedirectAuthenticatedUser>
          } 
        />
        <Route path="/login" element={<Login/>} />
        <Route path='/verify-email' element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />

        <Route path="/products/:id" 
          element={
            <>
              <Header />
              <Products/>
            </>
          } 
        />
        <Route path="/cart" 
          element={
            <>
              <Header />
              <Cart/>
            </>
          } 
        />
        <Route path="/order" 
          element={
            <>
              <Header />
              <Order/>
            </>
          } 
        />
        <Route path="/myCodes" 
          element={
            <>
              <Header />
              <MyCodes/>
            </>
          } 
        />
        {/* <Route path="/support" element={<Support/>} /> */}
        <Route path="/profile" 
          element={
            <>
              <Header />
              <Profile/>
            </>
          } 
        />



        <Route path="/adminPanel/dashboard" 
          element={
            <>
              <Header />
              <AdminDashboard/>
            </>
          } 
        />
        
        
      </Routes>
      <Toaster />
    </>
  )
}

export default App
