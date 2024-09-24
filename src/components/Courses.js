import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const coursesList = [
    {
        title: "JavaScript",
        description: `Lorem ipsum odor amet, consectetuer adipiscing 
        elit. Erat feugiat pulvinar lectus pellentesque tempor 
        libero accumsan.`,
    },
    {
        title: "React",
        description: `Lorem ipsum odor amet, consectetuer adipiscing 
        elit. Erat feugiat pulvinar lectus pellentesque tempor 
        libero accumsan.`,
    },
    {
        title: "React Native",
        description: `Lorem ipsum odor amet, consectetuer adipiscing 
        elit. Erat feugiat pulvinar lectus pellentesque tempor 
        libero accumsan.`,
    },
    {
        title: "HTML/CSS",
        description: `Lorem ipsum odor amet, consectetuer adipiscing 
        elit. Erat feugiat pulvinar lectus pellentesque tempor 
        libero accumsan.`,
    },
];

const Course = ({ title, description, onClick }) => {
    return (
        <>
            <div className="courseItems">
                <Button type='button' onClick={onClick} className="course-button bg-success">
                    <h3>{title}</h3>
                </Button>
                <p>{description}</p>
            </div>
        </>
    );
};

const Courses = () => {
    const navigate = useNavigate();

    const handleCourseClick = () => {
        navigate(`/courses`);
    };

    return (
        <>
            <div className='courses-container'>
                <h3 className='sub-heading'>
                    Courses
                </h3>
                <div className='courselist-container'>
                    {coursesList.map((course, index) => (
                        <Course
                            key={index}
                            title={course.title}
                            description={course.description}
                            onClick={() => handleCourseClick(course.title)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};



export default Courses;