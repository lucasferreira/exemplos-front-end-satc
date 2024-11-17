import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";

import { Home } from "./routes/Home";
import { MovieView } from "./routes/MovieView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieView />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
