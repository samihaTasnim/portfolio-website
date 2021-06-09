import React from 'react';
import { Link } from 'react-router-dom';
import Brand from '../navbar-brand-removebg-preview.png';

const brandColor = {
  color: '#1864b5'
}

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
          <div className="navbar-nav ms-auto">
            <Link to="/home" className="nav-link active p-4" aria-current="page" href="..">Home</Link >
            <Link to="/work" className="nav-link active p-4" href="..">Works</Link >
            <Link to="/resume" className="nav-link active p-4" href="..">Resume</Link>
            <Link to="/blog"className="nav-link active p-4" href="..">Blog</Link>
            <Link to="/contact"className="nav-link active p-4"  href="..">Contact me </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;