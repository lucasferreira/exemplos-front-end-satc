import { createContext, useState } from "react";

export const AlunosContext = createContext({
  alunos: [],
  adicionaAluno: (aluno) => {},
  atualizaAluno: (aluno) => {},
  removeAluno: (id) => {},
});

export function AlunosProvider({ children }) {
  const [alunos, setAlunos] = useState([]);

  function adicionaAluno(aluno) {
    setAlunos([...alunos, aluno]);
  }

  function atualizaAluno(aluno) {
    setAlunos(
      alunos.map((alunoMap) => {
        if (alunoMap.id === aluno.id) {
          return aluno;
        }
        return alunoMap;
      }),
    );
  }

  function removeAluno(id) {
    setAlunos(alunos.filter((aluno) => aluno.id !== id));
  }

  return (
    <AlunosContext.Provider
      value={{
        alunos,
        adicionaAluno,
        atualizaAluno,
        removeAluno,
      }}
    >
      {children}
    </AlunosContext.Provider>
  );
}
