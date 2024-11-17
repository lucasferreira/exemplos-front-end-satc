import { useState } from "react";

import { testLogin } from "../actions/login.js";

export function Login() {
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // este é um outro jeito de lidar com formulários + react
    // a ideia é só lermos os dados do formulário (e campos)
    // só na hora que precisarmos deles mesmo, ao invés de salvar
    // um por um em um estado (useState)
    const form = new FormData(event.target);
    const username = form.get("username");
    const password = form.get("password");

    if (username === "" || password === "") {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const userData = await testLogin(username, password);
      setUserData(userData);
    } catch {
      alert("Não foi possível fazer login, verifique seu usuário senha.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-9 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          SysALUNOS
        </h2>
      </div>
      {userData?.id && (
        <div className="mt-6 rounded-md bg-green-100 p-3 text-green-900 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="text-center text-sm/6">
            Olá, <strong>{userData.name}</strong>! Você está logado.
          </p>
        </div>
      )}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Usuário
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Senha
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
