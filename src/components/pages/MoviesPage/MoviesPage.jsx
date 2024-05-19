import getMovies from "../../service/searchQueryAPI";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../MovieList/MovieList";
import { Audio } from "react-loader-spinner";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("query") ?? "";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === "") {
      return "Please enter your search";
    }
    const query = event.target.elements.query.value.trim();
    setSearchParams({ query });
    event.target.reset();
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const getData = async () => {
      setData([]);
      setLoading(true);
      setError("");
      try {
        const data = await getMovies(movieName);
        if (!data.length) {
          alert("Please enter another search");
        }
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieName]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <HiSearch /> */}
        <input
          placeholder="Enter your search..."
          type="text"
          defaultValue={movieName}
          name="query"
        />
        <button type="submit">Search</button>
      </form>
      {loading && (
        <Audio
          textAlign="centre"
          height="80"
          width="80"
          radius="9"
          color=" #96eaff"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {data.length ? (
        <MovieList type="movies" movies={data} />
      ) : (
        "no results found"
      )}
    </>
  );
};

export default MoviesPage;
