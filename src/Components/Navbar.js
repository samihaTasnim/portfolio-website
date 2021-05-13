import React from 'react';
import { Link } from 'react-router-dom';

const brandColor = {
  color: '#1864b5'
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" style={brandColor} href="..">Samiha Tasnim</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/home" className="nav-link active p-4 text-white" aria-current="page" href="..">Home</Link >
            <Link to="/work" className="nav-link active p-4 text-white" href="..">Works</Link >
            <Link to="/resume" className="nav-link active p-4 text-white" href="..">Resume</Link>
            <Link to="/blog"className="nav-link active p-4 text-white" href="..">Blog</Link>
            <Link to="/contact"className="nav-link active p-4 text-white"  href="..">Contact me </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;