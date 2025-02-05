import MovieCard from "./Snippets/MovieCard";
import Container from "react-bootstrap/Container";

const SearchResults = ({movies}) => {
    return (
        <div className="bg-dark">
        <Container className="d-flex flex-wrap">
            { movies.map((movie) => (

           <MovieCard key={movie.id} movie={movie} />
            ))}


        </Container>
        </div>

);
}

export default SearchResults;