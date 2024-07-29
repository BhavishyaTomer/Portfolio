import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from"../assets/img/my.png"
import { useState,useEffect } from 'react'
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import resume from "../assets/resume.pdf"
const Banner = () => {
    const [loopNum,setLoopNum]=useState(0)
    const[isDeleting,setIsDeleting]=useState(false)
    const toRotate=["Web Developer","Web Designer","UI/UX Designer"]
    const [text,setText]=useState('');
    const period=2000;
    const [delta,setDelta]=useState(300-Math.random() * 100)
    useEffect(()=>{
     let ticker=setInterval(() => {
        tick()
     }, delta);
     return ()=>{clearInterval(ticker)}
    },[text])
    const tick=()=>{
        let i=loopNum % toRotate.length
        let fullText=toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)
        setText(updatedText);
        if(isDeleting)
        {
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting&&updatedText===fullText)
        {
            setIsDeleting(true);
            setDelta(period)
            
        }
        else if(
            isDeleting&&updatedText===""
        )
        {
            setIsDeleting(false)
            setLoopNum(loopNum+1);
            setDelta(500)
        }
    }
  return (
    <section className='banner' id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className='tagLine'>
                    Welcome to my Portfolio </span>
                <h1>{`Hi I'm Bhavishya `}<span className='wrap'>{text}</span></h1>
                <p>Pro at React and Angular, I dabble in Firebase, Tailwind, Node, Express, MongoDB, and Postgres. Oh, and I also speak React Native. Basically, I collect frameworks like Pokémon.</p>
                <a href={resume} download>
                <button onClick={()=>console.log("working")}>Lets Connect <ArrowRightCircle size={25} /></button>
                </a>
                </div>}
                </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={headerImg} alt="Header img" />
                </div>}
                </TrackVisibility>
                </Col>
                

            </Row>
            </Container> 
        
    </section>
  )
}

export default Banner
