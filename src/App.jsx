import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./user/notFound";
import Home from "./user/home";
import Menu from "./user/menu";
import Cart from "./user/cart";
import DishDetails from "./user/dishDetails";

import Layout from "./Layout/Layout";
import Footer from "./Layout/footer";

import ErrorBoundary from "./errorBoundary";

import Login from "./Login";
import RequireAuth from "./auth/RequireAuth";

import { ThemeProvider, useTheme } from "./theme/themeContext";

import CartDrawer from "./cart/cartDrawer";

import {CheckoutSkeleton} from "./skeleton";

import "./App.css";

const Checkout = lazy(() => import("./features/checkoutForm"));


import OrderDetails from "./orders/orderDetails";

import Orders from "./orders/order";

import Favorites from "./user/favorites";


// admin case
import AdminLayout from "./admin/adminLayout";
import AdminLogin from "./admin/auth/adminLogin";
import AuthProvider from "./admin/auth/authContext";
import Dashboard from "./admin/dashboard/dashBoard";
import DishManagement from "./admin/dishes/dishManagement";
import OrderManagement from "./admin/orders/orderManagement";
import AdminRequireAuth from "./admin/auth/AdminRequireAuth";


function AppContent() {
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { theme } = useTheme();

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={theme}>
      <Routes>

        <Route
          element={
            <Layout
              search={search}
              onSearch={handleSearch}
              onCartClick={() => setCartOpen(true)}
            />
          }>

          <Route          
            path="/"
            element={<Home />}
          />

          <Route path="/Menu" element={
              // <ErrorBoundary
              //   fallback={<h3>Sorry! Failed to load menu.</h3>}
              // > </ErrorBoundary>
                <>
                  <h1 className="homeh2">Our menu's</h1>
                  <Menu search={search} />
                </>
             
            }
          />

          <Route path="favorites" element={<Favorites />}
          />

          <Route
            path="/Cart"
            element={
              <ErrorBoundary
                fallback={<h3>Sorry! Can't load cart.</h3>}
              >
                <Cart />
              </ErrorBoundary>
            }
          />
       
     <Route element={<RequireAuth isAuthenticated={isAuthenticated}/>} >
          <Route
            path="/checkout"
            element={
              <Suspense fallback={<CheckoutSkeleton />}>
                <Checkout />
              </Suspense>
            }
          />
      </Route>
          <Route
            path="/Menu/:id"
            element={<DishDetails />}
          />


   <Route path="/login" element={<Login 
          setIsAuthenticated={setIsAuthenticated}/>} />
         

          <Route
            element={
              <RequireAuth
                isAuthenticated={isAuthenticated}
              />
            }
          >
           
          </Route>

          <Route path="orders/:id" element={<OrderDetails />}
          />

          <Route path="orders" element={<Orders  />}
          />

          <Route
            path="/Footer"
            element={<Footer />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Route>

         {/* /* ADMIN CASE */ }
  
 

  <Route path="/admin/login" element={<AdminLogin />} />

  <Route path="/admin" element={<AdminRequireAuth />}>
  <Route element={<AdminLayout />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="dishes" element={<DishManagement />} />
    <Route path="orders" element={<OrderManagement />} />
  </Route>
</Route>

 </Routes>


      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}

function App() {
  return (

    <ErrorBoundary>
      <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;