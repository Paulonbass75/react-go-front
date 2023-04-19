import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Input from "./form/Input";
import Select from "./form/Select";
import TextArea from "./form/TextArea";

export default function EditMovies() {
  const navigate = useNavigate();
  const { jwtToken } = useOutletContext();

  const [error, setError] = useState(null);
  const [errors, setErrors] = useState([]);

  const mpaaOptions = [
    { id: "G", value: "G" },
    { id: "PG", value: "PG" },
    { id: "PG13", value: "PG13" },
    { id: "R", value: "R" },
    { id: "NC17", value: "NC17" },
  ];

  const hasError = (key) => {
    return errors.indexOf(key) !== -1;
  };

  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    release_date: "",
    runtime: "",
    mpaa_rating: "",
    description: "",
  });

  // get id from url
  let { id } = useParams();

  useEffect(() => {
    if (jwtToken === "") {
      navigate("/login");
      return;
    }
  }, [jwtToken, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => (e)=>{
    let value = e.target.value;
    let name = e.target.name;
    setMovie({ ...movie, [name]: value, });
  };

  return (
    <div>
      <h2>Add/Edit Movies</h2>
      <hr />
      <pre>{JSON.stringify(movie, null, 3)} </pre>

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={movie.id} id="id"></input>
        <Input
          title={"Title"}
          className={"form-control"}
          type={"text"}
          name={"title"}
          value={movie.title}
          onChange={handleChange("title")}
          errorDiv={hasError("title") ? "text-danger" : "d-none"}
          errorMsg={"Title required"}
        />
        <Input
          title={"Release Date"}
          className={"form-control"}
          type={"date"}
          name={"release_date"}
          value={movie.release_date}
          onChange={handleChange("release_date")}
          errorDiv={hasError("release_date") ? "text-danger" : "d-none"}
          errorMsg={"Release Date required"}
        />
        <Input
          title={"Runtime"}
          className={"form-control"}
          type={"text"}
          name={"runtime"}
          value={movie.runtime}
          onChange={handleChange("runtime")}
          errorDiv={hasError("runtime") ? "text-danger" : "d-none"}
          errorMsg={"Runtime required"}
        />
      
        <Select
          title={"MPAA Rating"}
          className={"form-control"}
          name={"mpaa_rating"}
          options={mpaaOptions}
          value={movie.mpaa_rating}
          onChange={handleChange("mpaa_rating")}
          placeHolder={"Choose..."}
          errorDiv={hasError("mpaa_rating") ? "text-danger" : "d-none"}
          errorMsg={"MPAA Rating required"}
        />
        <TextArea
          title={"Description"}
          rows={"3"}
          name={"description"}
          value={movie.description}
          onChange={handleChange("description")}
          errorDiv={hasError("description") ? "text-danger" : "d-none"}
          errorMsg={"Description required"}
        />
      </form>
    </div>
  );
}
