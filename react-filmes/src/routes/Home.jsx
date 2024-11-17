import { useState } from "react";

import { FormSearch } from "../components/FormSearch";
import { MovieItem } from "../components/MovieItem";
import { Loading } from "../components/Loading";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [searchDone, setSearchDone] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const isLoading = loading && search?.trim() !== "";
  const hasMovies = movies.length > 0;

  async function searchMovies() {
    setLoading(true);
    setSearchDone(false);

    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=1cd66749`,
    );
    const data = await response.json();
    if (data?.Search?.length > 0) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }

    setLoading(false);
    setSearchDone(true);
  }

  return (
    <div>
      <FormSearch
        search={search}
        onSearchText={(text) => setSearch(text)}
        onSubmit={searchMovies}
      />
      {isLoading && <Loading />}
      {!searchDone && !isLoading && (
        <section className="mt-3 rounded-md bg-gray-200 px-3 py-5 text-center">
          <p>Informe um termo em inglês acima para encontrar um filme.</p>
        </section>
      )}
      {searchDone && search?.trim() !== "" && !hasMovies && (
        <section className="mt-3 rounded-md bg-gray-200 px-3 py-5 text-center">
          <p>Nenhum filme encontrado para sua busca.</p>
        </section>
      )}
      {hasMovies && (
        <section className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => {
            return (
              <MovieItem
                key={movie.imdbID}
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={
                  movie.Poster && movie.Poster !== "N/A" ? movie.Poster : null
                }
              />
            );
          })}
        </section>
      )}
    </div>
  );
}
