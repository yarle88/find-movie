export default function Movies({ movies }) {
  return movies ? (
    <ul>
      {movies.map((m) => (
        <li className="movie" key={m.id}>
          <div className="movie-data">
            <p>{m.title}</p>
            <p>{m.year} </p>
          </div>
          <img src={m.poster} alt={`Poster of the ${m.title}`} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="movie">
      <p>Not results</p>
    </div>
  );
}
