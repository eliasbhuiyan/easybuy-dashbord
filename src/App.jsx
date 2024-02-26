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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashbord />} />
          <Route path="/calandar" element={<Calander />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
