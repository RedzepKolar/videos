import {useState} from "react";
import {fetchMovie} from "../../services/omdbApi";

const SearchMovie = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");

    const handleSearchMovie = async (e) => {
        e.preventDefault();
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
           await fetchMovie(title);
            setTitle("");

        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
        <input value={title} type="text" onChange={e => setTitle(e.target.value)} placeholder="Search title movie..." />
            <button onClick={handleSearchMovie} disabled={isLoading}>{isLoading ? "Loading..." : "Search movie"}</button>
            {error && <p style={{ color: "red"}}>{error}</p>}
        </>
    )
}

export default SearchMovie;