import { Col, Container, Row } from "reactstrap";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const LoginPage = () => {
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col>
                        Sign Up Here ! ---
                    </Col>
                    <Col>
                        <table>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>johndoe@example.com</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jane Doe</td>
                                <td>janedoe@example.com</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Bob Smith</td>
                                <td>bobsmith@example.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default LoginPage;