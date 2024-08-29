import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from "./Layouts/MainLayout.jsx";
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from "./Pages/Home.jsx";
import Registration from "./Components/Registration.jsx";
import Login from "./Components/Login.jsx";
import AddTouristsSpot from "./Pages/AddTouristsSpot.jsx";
import AllTouristsSpot from "./Pages/AllTouristsSpot.jsx";
import MyList from "./Pages/MyList.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-tourists-spot",
        element: <AllTouristsSpot />
      },      
      {
        path: "add-tourists-spot",
        element: <AddTouristsSpot />
      },
      {
        path: "my-list",
        element: <MyList />
      },
      {
        path: "register",
        element: <Registration />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
