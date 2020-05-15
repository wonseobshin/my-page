import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


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
  
  return (
    <nav className={`nav-bar nav-container ${scrolled}`}>
      <div className="logo-container">
        {/* <Link to={`/`}> */}
          <h1 className="nav-item main-logo">Won Seob Shin</h1>
        {/* </Link> */}
      </div>
      <div className="search-container">
        <form>
          {/* <TextField
            id="filled-search"
            label="Search field"
            type="search"
            className="search"
            margin="normal"
            variant="filled"
          /> */}
          {/* <Paper>
            
            <InputBase
              className="searchInput"
              placeholder="Search Articles: Try 'Pyramids'"
              inputProps={{ 'aria-label': 'Search Google Maps' }}
            />
            <IconButton className="iconButton" aria-label="Search">
              <SearchIcon />
            </IconButton>
            
          </Paper> */}
        </form>
      </div>
    </nav>
  );
}