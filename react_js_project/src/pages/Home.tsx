/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import Logo from "../global/components/Logo";
import Button from "../global/components/Button";
import { userLogout } from "../api/logout";
import { AxiosResponse } from "axios";
import { fetchMovies, movie, searchMovies } from "../api/moviesApi";
import Movies from "../global/components/Movies";
import SearchField from "../global/components/SearchField";

function Home() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<movie[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetchMovies();
    if (data && data.results) {
      setMovies(data.results);
    }
  };

  const handleMovieSearch = (value: string) => {
    if (value && value.length > 2) {
      searchMovies({
        query: value,
        include_adult: "false",
        language: "en-US",
        page: "1",
      }).then((data) => {
        if (data && data.results) {
          setMovies(data.results);
        }
      });
    } else {
      getMovies();
    }
  };

  const handleTextDebounce = useCallback(debounce(handleMovieSearch, 400), []);

  const handleLogout = () => {
    userLogout()
      .then(async (result: string | AxiosResponse) => {
        if (typeof result !== "string" && result.status === 204) {
          localStorage.removeItem("AccessToken");
          navigate("/", { replace: true });
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="flex fixed top-0 px-10 left-0 z-50 w-full h-20  bg-neutral-700 justify-between items-center">
        <Button title="Logout" logout onClick={handleLogout} />
        <a href="/Home">
          <Logo />
        </a>
        <SearchField onChange={(e) => handleTextDebounce(e.target.value)} />
      </div>
      <div className=" flex flex-1 max-w-[100vw]  h-full overflow-x-scroll">
        <Movies data={movies} />
      </div>
    </div>
  );
}

export default Home;
