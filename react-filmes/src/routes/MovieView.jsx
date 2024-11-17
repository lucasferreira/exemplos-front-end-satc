export function MovieView() {
  return (
    <section className="mt-3 pb-4">
      <div className="pb-5 pt-3.5">
        <h2 className="text-xl font-bold xl:text-2xl">Nome do Filme (2021)</h2>
      </div>
      <div className="flex flex-row gap-2">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
          alt="Filme"
          className="w-1/3 rounded-lg"
        />
        <div className="flex flex-col gap-2 px-1.5 py-3">
          <p className="text-sm font-bold">Action, Adventure, Sci-Fi</p>
          <p>
            DAfter being held captive in an Afghan cave, billionaire engineer
            Tony Stark creates a unique weaponized suit of armor to fight evil.
          </p>
          <p className="text-sm">
            <strong>Elenco:</strong> Robert Downey Jr., Gwyneth Paltrow,
            Terrence Howard
          </p>
          <p className="text-sm">
            <strong>Diretor:</strong> Jon Favreau
          </p>
          <p className="text-sm italic">126 min</p>
          <a
            href="#"
            className="my-3 self-start rounded-md bg-slate-400 px-2 py-1 text-sm font-bold text-white hover:bg-slate-500"
          >
            ← Voltar para a capa
          </a>
        </div>
      </div>
    </section>
  );
}
