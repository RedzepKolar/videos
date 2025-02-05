import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Search = () => {
    return (
    <>
        <Form className="bg-dark text-white">
            <Container className="p-4">
                <Form.Group className="mb-1" controlId="formBasicTerm">
                    <Form.Label>Movie title</Form.Label>
                    <Form.Control type="text" placeholder="Enter movie title" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Container>
        </Form>
    </>
    )
}

export default Search;