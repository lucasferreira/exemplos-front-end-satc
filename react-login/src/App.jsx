import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";

import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { Alunos } from "./routes/Alunos";
import { AlunoAdd } from "./routes/AlunoAdd";

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
        path: "/alunos/add",
        element: <AlunoAdd />,
      },
      {
        path: "/alunos",
        element: <Alunos />,
      },
    ],
  },
]);

const externalRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
