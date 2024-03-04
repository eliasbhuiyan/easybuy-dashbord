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
import Registration from "./components/pages/Registration";
import Login from "./components/pages/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashbord />} />
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
