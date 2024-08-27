import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from "./Layouts/MainLayout.jsx";
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from "./Pages/Home.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
