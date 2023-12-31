import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Munisi from "./pages/munisi/Munisi";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {


  const Layout = () => {
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
            <Outlet/>
          </QueryClientProvider>
          </div>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/users",
          element: <Users/>,
        },
        {
          path: "/munisi",
          element: <Munisi/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
      ]
    },
    
  ]);

return (
  <RouterProvider router={router}/>
)
}

export default App
