import { useState } from "react";

 export default function useMovies(){
    const [movies, setMovies] = useState();
    const mappedMovies=movies?.map(m=>({
        id:m.imdbID,
        title:m.Title,
        year:m.Year,
        poster:m.Poster
      }))

      const findMovie = (title) => {
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=c711be8e`)
          .then((res) => res.json())
          .then((data) => {
            setMovies(data.Search);
          });
      };

      return {mappedMovies, findMovie}
 }