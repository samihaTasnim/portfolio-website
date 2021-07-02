import React from 'react';
import { Link } from 'react-router-dom';
import Brand from '../navbar-brand-removebg-preview.png';
import './Navbar.css';

const imgStyle = {
  width: '5%',
  height: '5%',
  marginLeft: '5%'
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <img src={Brand} alt="Samiha Tasnim" style={imgStyle}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto text-white">
            <Link to="/home" className="nav-link active p-4 link-elara" aria-current="page" href="..">Home</Link >
            <Link to="/work" className="nav-link active p-4 link-elara" href="..">Projects</Link >
            <Link to="/resume" className="nav-link active p-4 link-elara" href="..">Resume</Link>
            <Link to="/aboutme"className="nav-link active p-4 link-elara" href="..">About me</Link>
            <Link to="/contact"className="nav-link active p-4 link-elara"  href="..">Contact me </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;