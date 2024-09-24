import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Col, Container, Row } from "reactstrap";
import '../AboutPage.css';

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={6} className='p-4'>
                        <h1>What is <span className='brand'>FLISTA</span>&nbsp;?</h1>
                        <h4>Why use it?</h4>
                    </Col>
                    <Col xs={6} className='p-4'>
                        <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. 
                            Primis dolor bibendum vivamus turpis leo primis 
                            pellentesque. Suscipit suspendisse accumsan eget mattis
                            pulvinar pulvinar. Facilisis interdum sed efficitur 
                            ligula hendrerit elementum maecenas pulvinar. 
                            Vulputate lacus cras; erat fusce finibus purus augue. 
                            Malesuada mauris ipsum; cubilia nullam placerat litora. 
                            Nostra nunc tristique dictum ex lorem potenti nulla 
                            laoreet. Varius dui nostra mi maximus et lacus iaculis 
                            nascetur. In finibus elit vivamus egestas aptent. 
                            Diam lectus varius torquent est taciti metus. 
                            Cubilia mi sem vel mollis dolor curae congue. Nec vitae 
                            fames aliquet orci fringilla vivamus vivamus 
                            senectus. Netus enim lobortis risus vel lectus rutrum, 
                            taciti fermentum diam.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default AboutPage;