import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]); // state for movies

  useEffect(() => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: headers,
  }

  fetch("http://localhost:8080/movies", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setMovies(data);
    });

    try {
      const response =  fetch("http://localhost:8080/movies", requestOptions);
      const data = response.json();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
    
   
  }, []);

  return (
    <div className="">
      <h2>Movies</h2>
      <hr />
      {/* <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>

              <Link to={`/Movies/${movie.id}`}>
                {movie.name}
              </Link>
              </td>

              <td>{movie.description}</td>
              <td>{movie.price}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//  <tbody>
//                     {movies.map((m) => (
//                         <tr key={m.id}>
//                             <td>
//                                 <Link to={`/movies/${m.id}`}>
//                                     {m.title}
//                                 </Link>
//                             </td>
//                             <td>{m.release_date}</td>
//                             <td>{m.mpaa_rating}</td>
//                         </tr>   