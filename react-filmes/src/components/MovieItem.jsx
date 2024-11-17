import { Link } from "react-router-dom";

export function MovieItem({ poster, title, year, id }) {
  return (
    <Link
      to={`/movie/${id}`}
      className="rounded-lg bg-slate-300 p-2 shadow-md hover:bg-slate-200"
    >
      {poster && <img src={poster} alt={title} className="w-full rounded-lg" />}
      <h2 className="p-1 text-lg font-bold">{title}</h2>
      <p className="-mt-0.5 px-1 text-sm">{year}</p>
    </Link>
  );
}
