export function FormSearch({ search, onSearchText, onSubmit }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className="mb-4 flex flex-row gap-2"
    >
      <input
        value={search}
        onChange={(e) => onSearchText(e?.target?.value)}
        placeholder="Encontre um Filme"
        type="text"
        id="search"
        className="flex-1 rounded-md border border-slate-300 px-2 py-1"
      />
      <button
        type="submit"
        className="rounded-md bg-slate-400 px-2 py-1 font-bold text-white hover:bg-slate-500"
      >
        Buscar
      </button>
    </form>
  );
}
