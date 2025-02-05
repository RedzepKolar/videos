import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';


const Footer = () => {
    return (
        <footer className="d-flex justify-content-center align-items-center bg-light p-3 bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                        <p className="m-0">&copy; 2025 Movie Site. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer