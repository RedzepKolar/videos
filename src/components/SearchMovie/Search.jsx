import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {fetchMovie} from "../../services/omdbApi";
import SearchResults from "../Templates/SearchResults";

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async () => {
        console.log(searchTerm)
        try {
           const data = await fetchMovie("s",searchTerm);
            setMovies(data.Search);
        } catch (error) {}
    }
    return (
    <>
        <Form className="bg-dark text-white">
            <Container className="p-4">
                <Form.Group className="mb-1" controlId="formBasicTerm">
                    <Form.Label>Movie title</Form.Label>
                    <Form.Control onInput={ e => setSearchTerm(e.currentTarget.value)} type="text" placeholder="Enter movie title" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={searchMovies}>
                    Search
                </Button>
            </Container>
        </Form>
        <SearchResults movies={movies} />
    </>
    )
}

export default Search;