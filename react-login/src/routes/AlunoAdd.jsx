import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AlunosContext } from "../stores/AlunosContext";

export function AlunoAdd() {
  const { adicionaAluno } = useContext(AlunosContext);
  const navigate = useNavigate();

  const [aluno, setAluno] = useState({
    id: generateId(),
    name: "",
    email: "",
    nclass: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    adicionaAluno(aluno);

    setAluno({
      id: generateId(),
      name: "",
      email: "",
      nclass: "",
    });

    setTimeout(() => {
      navigate("/alunos");
    }, 900);
  }

  return (
    <div>
      <h2 className="mb-6 text-xl font-bold xl:text-2xl">
        Cadastrar novo Aluno
      </h2>
      <div className="flex gap-8">
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex-1 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Nome Completo
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={aluno.name}
                onChange={(event) =>
                  setAluno({ ...aluno, name: event.target.value })
                }
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              E-mail de Contato
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={aluno.email}
                onChange={(event) =>
                  setAluno({ ...aluno, email: event.target.value })
                }
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="nclass"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Turma do Aluno
            </label>
            <div className="mt-2">
              <input
                id="nclass"
                name="nclass"
                type="text"
                required
                value={aluno.nclass}
                onChange={(event) =>
                  setAluno({ ...aluno, nclass: event.target.value })
                }
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              CADASTRAR ALUNO
            </button>
          </div>
        </form>
        <pre className="flex-1 rounded-md bg-gray-200 p-4">
          {JSON.stringify(aluno, null, 2)}
        </pre>
      </div>
    </div>
  );
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
