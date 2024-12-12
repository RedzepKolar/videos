import {useState} from "react";
import {fetchMovie} from "../../services/omdbApi";

const SearchMovie = () => {

    const [title, setTitle] = useState("");

    const handleSearchMovie = async (e) => {
        e.preventDefault();
        try {
           await fetchMovie(title);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
        <input id="movieSearch" type="text" onChange={e => setTitle(e.target.value)} placeholder="Search title movie..." />
            <button onClick={handleSearchMovie}>Search movie</button>
        </>
    )
}

export default SearchMovie;