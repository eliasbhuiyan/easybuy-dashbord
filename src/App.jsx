import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Error from "./components/Error";
import Layout from "./components/Layout";
import Dashbord from "./components/pages/Dashbord";
import Product from "./components/pages/Product";
import AllProduct from "./components/pages/AllProduct";
import Login from "./components/pages/Login";
import OtpPage from "./components/pages/OtpPage";
import BecomeMerchant from "./components/pages/BecomeMerchant";
import Merchant from "./components/pages/Merchant";
import Registration from "./components/pages/Registration";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import Catagory from "./components/pages/Catagory";
import User from "./components/pages/User";
import AllCatagory from "./components/pages/AllCatagory";
import Chating from "./components/pages/Chating";
import CustomerList from "./components/pages/CustomerList";
import CustomerDetails from "./components/pages/CustomerDetails";
import ProductDetils from "./components/pages/ProductDetails";
import CatagoryDetails from "./components/pages/CatagoryDetails";
import { useSelector } from "react-redux";
import About from "./components/pages/About";
import Invoice from "./components/pages/Invoive";
import InvoiceList from "./components/pages/InvoiceList";
import OrderList from "./components/pages/OrderList";
import OrderDetails from "./components/pages/OrderDetails";

function App() {
  const user = useSelector((state) => state.user_sec.user);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/registration"
          element={user ? <Navigate to="/" replace /> : <Registration />}
        />
        <Route
          path="/becomemerchant"
          element={user ? <Navigate to="/" replace /> : <BecomeMerchant />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/otp/:userId" element={<OtpPage />} />
        <Route path="/about-site" element={<About />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashbord />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/customerlist" element={<CustomerList />} />
          <Route path="/customerdetails/:id" element={<CustomerDetails />} />
          <Route path="/chat" element={<Chating />} />
          <Route path="/catagory" element={<Catagory />} />
          <Route path="/allcatagory" element={<AllCatagory />} />
          <Route path="/catagorydetails/:id" element={<CatagoryDetails />} />
          <Route path="/product" element={<Product />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/productdetails/:slug" element={<ProductDetils />} />
          <Route path="/user" element={<User />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/invoicelist" element={<InvoiceList />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
