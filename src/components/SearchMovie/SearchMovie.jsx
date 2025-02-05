import {useEffect, useState} from "react";
import {fetchMovie} from "../../services/omdbApi";
import MovieCard from "../Templates/Snippets/MovieCard";

const SearchMovie = () => {



    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [movieData, setMovieData] = useState({});

    const handleSearchMovieByTitle = async () => {
        setError(null);

        if(title.trim() === "") {
            setError("Please enter a movie title.");
            return;
        }
        if(title.length < 3) {
            setError("The movie title must be at least 3 characters.");
            return;
        }

        setIsLoading(true);
        try {
          const data = await fetchMovie("t",title);
            setMovieData(data)
            setTitle("");


        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    // useEffect(() => {
    //     handleSearchMovieByTitle()
    // }, []);

    return (
        <>
            <input value={title} type="text" onChange={e => setTitle(e.target.value)}
                   placeholder="Search title movie..."/>
            <button type="button" onClick={handleSearchMovieByTitle}
                    disabled={isLoading}>{isLoading ? "Loading..." : "Search movie"}</button>
            {error && <p style={{color: "red"}}>{error}</p>}
            <div>
                <MovieCard movie={movieData}/>
            </div>

        </>
    )
}

export default SearchMovie;