import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";

function App() {
  const movies = useMovies();
  const [error, setError] = useState("");

  const titleChange = (e) => {
    setError("");
    const title = e.target.value;
    if (title == "") {
      setError("Title is required");
      return;
    }
    if (title.startsWith(" ")) {
      setError("Invalid title");
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = new window.FormData(event.target);
    const title = fields.get("title-to-find");
    if (title == "") {
      setError("Title is required");
      return;
    }
    movies.findMovie(title);
  };

  return (
    <div className="page">
      <header>
        <h1>Find Movies</h1>
        <form className="movie-form" onSubmit={handleSubmit}>
          <div className="group">
            <input
              type="text"
              name="title-to-find"
              onChange={titleChange}
              style={{
                border: "1px solid black",
                borderColor: error ? "red" : "black",
              }}
            />
            <button type="submit">Find</button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </header>
      <main>
        <Movies movies={movies.mappedMovies} />
      </main>
    </div>
  );
}

export default App;
