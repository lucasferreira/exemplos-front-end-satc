export function Home() {
  return (
    <div>
      <section className="mt-3 rounded-md bg-gray-200 px-3 py-5 text-center">
        <p>Informe um termo em inglês acima para encontrar um filme.</p>
      </section>
      <section className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"></section>
    </div>
  );
}
