import { Container, Row, Col, Nav, NavLink } from "reactstrap";

const Footer = () => {
    return (
        <footer>
            <Container fluid className='footer'>
                <Row className='text-black'>
                    <Col className='flex-column'>
                        Flista
                        <Nav>
                            <NavLink href='#' className='text-black'>About</NavLink>
                            <NavLink href='#' className='text-black'>Courses</NavLink>
                            <NavLink href='#' className='text-black'>Login</NavLink>
                        </Nav>
                    </Col>
                    <Col className='flex-column'>
                        * Icons Go Here *
                        <NavLink href='#'><i className='fa fa-shopping-cart'></i></NavLink>
                        <NavLink href='#'><i className='fa fa-brand fa-linkedin'></i></NavLink>
                        <NavLink href='#'><i className='fa fa-brand fa-github'></i></NavLink>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;