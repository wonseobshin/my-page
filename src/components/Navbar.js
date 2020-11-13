import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NavItem from "./NavItem";


export default function Navbar() {
  const [scrolled, setScrolled] = useState("");

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if(window.scrollY === 0){
        setScrolled("")
        console.log("not scrolled")
      } else {
        setScrolled("scrolled")
        console.log("scrolled")
      }
    });
  },[])
  
  function scrollToTop(){
    scroll.scrollToTop();
  };

  return (
    <nav className={`nav-bar nav-container ${scrolled}`}>
      <div className="logo-container">
        {/* <Link to={`/`}> */}
          <h1 className="nav-item main-logo">Won Seob Shin</h1>
        {/* </Link> */}
      </div>
      <div className="navItem-container">
        <Link
            activeClass="active"
            to="about-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <NavItem name="about" />
        </Link>
        <Link
            activeClass="active"
            to="resume-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <NavItem name="resume" />
        </Link>
        <Link
            activeClass="active"
            to="something-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <NavItem name="blog" />
        </Link>
        <Link
            activeClass="active"
            to="contact-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <NavItem name="contact"/>
        </Link>
      </div>
    </nav>
  );
}