import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { List } from "./pages/List";
import { Register } from "./components/Register";
import { Edit } from "./components/Edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <List />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "edit/:id",
          element: <Edit />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
