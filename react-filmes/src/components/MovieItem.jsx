export function MovieItem() {
  return (
    <a
      href="#"
      className="rounded-lg bg-slate-300 p-2 shadow-md hover:bg-slate-200"
    >
      <img
        src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
        alt="Filme"
        className="w-full rounded-lg"
      />
      <h2 className="p-1 text-lg font-bold">Nome do Filme</h2>
      <p className="-mt-0.5 px-1 text-sm">2021</p>
    </a>
  );
}
