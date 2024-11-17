import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { Loading } from "../components/Loading";

export function MovieView() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  async function searchMovie() {
    setLoading(true);

    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=1cd66749`,
    );
    const data = await response.json();
    if (data) {
      setMovie(data);
    } else {
      setMovie(null);
    }

    setLoading(false);
  }

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {movie && (
        <section className="mt-3 pb-4">
          <div className="pb-5 pt-3.5">
            <h2 className="text-xl font-bold xl:text-2xl">
              {movie.Title} ({movie.Year})
            </h2>
          </div>
          <div className="flex flex-row gap-2">
            {movie.Poster && movie.Poster !== "N/A" && (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-1/3 rounded-lg"
              />
            )}
            <div className="flex flex-col gap-2 px-1.5 py-3">
              <p className="text-sm font-bold">{movie.Genre}</p>
              <p>{movie.Plot}</p>
              <p className="text-sm">
                <strong>Elenco:</strong> {movie.Actors}
              </p>
              <p className="text-sm">
                <strong>Diretor:</strong> {movie.Director}
              </p>
              <p className="text-sm italic">{movie.Runtime}</p>
              <Link
                to="/"
                className="my-3 self-start rounded-md bg-slate-400 px-2 py-1 text-sm font-bold text-white hover:bg-slate-500"
              >
                ← Voltar para a capa
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
