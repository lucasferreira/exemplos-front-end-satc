import { Link, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div id="app" className="mx-3 max-w-7xl py-2 xl:mx-auto">
      <header className="mb-2 flex flex-col items-center justify-between gap-2 rounded-lg bg-slate-300 px-3 py-2 shadow-md md:flex-row xl:px-4 xl:py-3">
        <h1 className="text-2xl font-bold xl:text-3xl">
          <Link to="/">SysALUNOS</Link>
        </h1>
        <nav>
          <ul className="flex divide-x divide-slate-400">
            <li className="px-2 font-bold">
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li className="px-2 font-bold">
              <Link to="/alunos" className="hover:text-blue-500">
                Listar Alunos
              </Link>
            </li>
            <li className="px-2 font-bold">
              <Link to="/alunos/add" className="hover:text-blue-500">
                Cadastrar Aluno
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="px-3 py-2 xl:px-4 xl:py-3">
        <Outlet />
      </main>
    </div>
  );
}
