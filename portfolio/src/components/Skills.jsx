import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import merter1 from "../assets/img/meter1.svg"
import merter2 from "../assets/img/meter1.svg"
import merter3 from "../assets/img/meter1.svg"
import colorSharp from "../assets/img/color-sharp.png"
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className='skill' id='skills'>
         <Container>
            <Row>
                <Col>
                <div className='skill-bx'> 
                    <h2>
                        Skills
                    </h2>
                    <p>
                    "With the power level of a Super Saiyan, I command React, Angular, Firebase, Tailwind, Node, Express, MongoDB, Postgres, and React Native. My code is over 9000!😎"
                    </p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={merter1} alt='image' />
                            <h5>
                                Angular 
                            </h5>
                            </div>
                            <div className='item'>
                            <img src={merter2} alt='image' />
                            <h5>
                                React 
                            </h5>
                            </div>
                            <div className='item'>
                            <img src={merter3} alt='image' />
                            <h5>
                                Node Js
                            </h5>
                            </div>
                            <div className='item'>
                            <img src={merter1} alt='image' />
                            <h5>
                                Tailwind
                            </h5>
                            </div>
                            <div className='item'>
                            <img src={merter2} alt='image' />
                            <h5>
                                Bootstrap
                            </h5>
                            </div>
                            <div className='item'>
                            <img src={merter3} alt='image' />
                            <h5>
                                Firebase
                            </h5>
                            </div>
                            <div className='item'>
                            <img src={merter1} alt='image' />
                            <h5>
                                Shadcn
                            </h5>
                            </div>
                            
                            <div className='item'>
                            <img src={merter2} alt='image' />
                            <h5>
                                Express
                            </h5>
                        </div>
                        <div className='item'>
                            <img src={merter3} alt='image' />
                            <h5>
                                Figma
                            </h5>
                        </div>
                        <div className='item'>
                            <img src={merter1} alt='image' />
                            <h5>
                                Socket.io
                            </h5>
                        </div>
                        <div className='item'>
                            <img src={merter2} alt='image' />
                            <h5>
                                MongoDB
                            </h5>
                        </div>
                        <div className='item'>
                            <img src={merter3} alt='image' />
                            <h5>
                                JIRA
                            </h5>
                        </div>
                        <div className='item'>
                            <img src={merter1} alt='image' />
                            <h5>
                                Material UI
                            </h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
         </Container>
         <img src={colorSharp} alt="ColorSharp"  className='background-image-left'/>
        </section>
      )
}

export default Skills
