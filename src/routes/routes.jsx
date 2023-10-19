import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ReviewPreview from "../components/ReviewPreview";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllService from "../pages/AllService";
import ServiceDetails from "../pages/ServiceDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/all-service",
        element: <AllService />,
      },
      {
        path: "/service/:id",
        loader: ({ params }) => {
          return fetch(
            `https://seniority-solutions-backend-dtpieg2yh-farhanzizz.vercel.app/api/v1/service/${params.id}`
          );
        },
        element: <ServiceDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
