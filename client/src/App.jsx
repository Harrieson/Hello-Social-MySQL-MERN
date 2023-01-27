import Login from "./login/Login";
import Register from "./register/Register";
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import NavBar from './components/navbar/Navbar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from "./components/rightBar/RightBar";
import Profile from './profile/Profile'
import Home from "./home/Home";

function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/profile/:id', element: <Profile /> }
      ]
    },
    { path: "/login", element: <Login /> },
    { path: '/register', element: <Register /> }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
