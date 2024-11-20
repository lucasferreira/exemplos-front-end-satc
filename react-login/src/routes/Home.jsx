import { useContext } from "react";

import { LoginContext } from "../stores/LoginContext";

export function Home() {
  const { userData } = useContext(LoginContext);

  return (
    <div className="rounded-lg bg-gray-200 px-4 py-12">
      <p className="mb-3 text-center md:text-lg">
        Seja bem-vindo <strong>{userData?.name}</strong>, ao sistema de
        gerenciamento de alunos de front-end.
      </p>
      <p className="mb-3 text-center md:text-lg">
        Utilize a barra de navegação para acessar as funcionalidades do sistema.
      </p>
    </div>
  );
}
