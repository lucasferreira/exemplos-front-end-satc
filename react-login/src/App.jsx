import { useContext } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginProvider, LoginContext } from "./stores/LoginContext";
import { AlunosProvider } from "./stores/AlunosContext";

import { RootLayout } from "./layouts/RootLayout";

import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { Alunos } from "./routes/Alunos";
import { AlunoAdd } from "./routes/AlunoAdd";

const internalRouter = createBrowserRouter([
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

const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

function WebRouter() {
  const { userData } = useContext(LoginContext);

  return <RouterProvider router={!userData ? publicRouter : internalRouter} />;
}

export default function App() {
  return (
    <LoginProvider>
      <AlunosProvider>
        <WebRouter />
      </AlunosProvider>
    </LoginProvider>
  );
}
