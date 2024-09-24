import '../HomePage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Courses from '../components/Courses';
import { Row, Col } from 'reactstrap';

const HomePage = () => {
    

    return (
        <>
            <NavBar />
            <div className='homepage-container'>
                <div className='hero-section'>
                    <h2 className='hero-heading'>
                        Learn Web Development
                    </h2>
                    <br />
                    <br />
                    <h2>
                        Start Here!
                    </h2>
                    <i className='fa-solid fa-chevron-down fa-2xl'></i>
                </div>
                <br />
                <div>

                </div>
                <br />
                <Courses />
                <br />
                <div className='about-section d-flex'>
                    <Row>
                        <Col xs={4} className='p-4'>
                            <h1>What is <span className='brand'>FLISTA</span>&nbsp;?</h1>
                            <h4>Why use it?</h4>
                        </Col>
                        <Col xs={8} className='p-4'>
                            <h5>
                                <span className='brand'>FLISTA</span>&nbsp; is an innovative 
                                website designed to empower 
                                aspiring coders and seasoned developers alike by 
                                providing a comprehensive array of coding resources, 
                                courses, and expert tips. With a user-friendly 
                                interface, &nbsp;<span className='brand'>FLISTA</span>&nbsp; 
                                offers interactive tutorials 
                                covering various programming languages, from Python 
                                to JavaScript, alongside project-based learning 
                                modules that foster hands-on experience. Users can 
                                explore curated articles and video content that delve 
                                into best practices, coding challenges, and the latest 
                                industry trends. Whether you're looking to kickstart 
                                your coding journey or enhance your skills, 
                                &nbsp;<span className='brand'>FLISTA</span>&nbsp;
                                serves as a valuable companion in navigating the 
                                ever-evolving world of technology.
                            </h5>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;