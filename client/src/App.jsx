import Login from "./login/Login";
import Register from "./register/Register";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: '/register', element: <Register /> }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
