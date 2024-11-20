import { useContext } from "react";

import { AlunosContext } from "../stores/AlunosContext";

export function Alunos() {
  const { alunos, removeAluno } = useContext(AlunosContext);

  return (
    <div>
      <h2 className="text-xl font-bold xl:text-2xl">Listagem de Alunos</h2>
      <div className="relative my-6 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome do Aluno
              </th>
              <th scope="col" className="px-6 py-3">
                E-mail
              </th>
              <th scope="col" className="px-6 py-3">
                Turma
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Opções
              </th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr
                key={aluno.id}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {aluno.name}
                </th>
                <td className="whitespace-nowrap px-6 py-4">
                  <a href={`mailt:${aluno.email}`}>{aluno.email}</a>
                </td>
                <td className="px-6 py-4">{aluno.nclass}</td>
                <td className="px-6 py-4 text-center">
                  <a
                    href="#editar"
                    className="text-indigo-200 hover:text-indigo-300"
                  >
                    Editar
                  </a>
                  {` `}|{` `}
                  <a
                    href="#excluir"
                    onClick={(event) => {
                      event.preventDefault();
                      if (
                        window.confirm("Deseja realmente excluir este aluno?")
                      ) {
                        removeAluno(aluno.id);
                      }
                    }}
                    className="text-red-500 hover:text-red-600"
                  >
                    Excluir
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
