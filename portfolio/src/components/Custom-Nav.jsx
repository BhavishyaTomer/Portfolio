import React from 'react'
import { useState,useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navicon1 from '../assets/img/nav-icon1.svg'
import navicon2 from '../assets/img/nav-icon2.svg'
import navicon3 from '../assets/img/nav-icon3.svg'


const CustomNav = () => {
    const [activeLink,setActiveLink]=useState('home')
    const [scroll,setScroll]=useState(false)
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>0){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    return (
        <Navbar expand="lg" className={scroll?"scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span >Toggle Icon</span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink==="home"?'active navbar-link':'navbar-link'} onClick={()=>setActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#link" className={activeLink==="skills"?'active navbar-link':'navbar-link'} onClick={()=>setActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#link" className={activeLink==="project"?'active navbar-link':'navbar-link'} onClick={()=>setActiveLink("project")}>Project</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navicon1} alt="" /></a>
                            <a href="#"><img src={navicon2} alt="" /></a>
                            <a href="#"><img src={navicon3} alt="" /></a>
                        </div>
                        <button className='btn btn-primary' onClick={()=>{console.log("hitting")}}><span>Lets Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNav