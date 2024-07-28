import React from 'react'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
    const projects = [
        {
            title: "Chat App",
            description: "Communicate with people using Socket.IO",
            imgUrl: projImg1,
            link:"https://github.com/BhavishyaTomer/React-Projects/tree/main/chatapp"
        },
        {
            title: "CRUD Operation",
            description: "Implemented custom pipes and angular material",
            imgUrl: projImg2,
            link:"https://github.com/BhavishyaTomer/tech-assignment"
        },
        {
            title: "Port Folio",
            description: "Implemented React and Bootstrap",
            imgUrl: projImg3,
            link:"https://github.com/BhavishyaTomer/tech-assignment"
        },
        {
            title: "Social Media App",
            description: "used Angular and Java to develop a full stack project",
            imgUrl: projImg1,
            link:"https://github.com/LetsGetConnectED/ConnectED-A-Social-Networking-Platform"
        },
        {
            title: "URL Shortner",
            description: "implemented ShadCN and React",
            imgUrl: projImg2,
            link:"https://github.com/BhavishyaTomer/Url-shortner/tree/main/Url-shortner"
        },
       
    ];
    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>
                                        Projects
                                    </h2>

                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">

                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="" className='background-image-right' />
        </section>
    )
}

export default Projects
