import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error from "./components/Error";
import Layout from "./components/Layout";
import Dashbord from "./components/pages/Dashbord";
import Calander from "./components/pages/Calander";
import Calculator from "./components/pages/Calculator";
import Product from "./components/pages/Product";
import AllProduct from "./components/pages/AllProduct";
import Login from "./components/pages/Login";
import OtpPage from "./components/pages/OtpPage";
import BecomeMerchant from "./components/pages/BecomeMerchant";
import Merchant from "./components/pages/Merchant";
import Registration from "./components/pages/Registration";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import { useSelector } from "react-redux";

function App() {
  // const user = useSelector((state) => state.activeUser.value.role);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/becomemerchant" element={<BecomeMerchant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/otp/:userId" element={<OtpPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashbord />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/calandar" element={<Calander />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/product" element={<Product />} />
          <Route path="/allproduct" element={<AllProduct />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
