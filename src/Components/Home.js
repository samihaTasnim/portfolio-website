import React from 'react';
import Image from '../mobile_devices.svg';
import { Link } from 'react-router-dom';
import WebsiteImg from '../screens-4.jpg';
import EmajohnImg from '../Screenshot (217).png';
import TravallyImg from '../Screenshot (218).png';

const brandColor = {
  color: '#1864b5'
}

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-md-6">
        <h1>Hello, I'm</h1> 
        <h1 style={brandColor}>Samiha Tasnim</h1>
        <br />
        <small>An enthusiastic Front-end developer trying to make easily accessible and responsive websites.</small>
        <br />
        <br />
        <Link to="/Resume.pdf" target="_blank" download><button className="btn text-white" style={{backgroundColor: '#1864b5'}}>Download resume</button></Link>
      </div>
      <div className="offset-md-1 col-md-5">
          <img src={Image} alt="a device illustration" />
      </div>
      </div>
      <br />
      <div className="row my-5">
        <div className="col-md-6 mt-5">
          <ul>
            <li><span style={brandColor}>React</span>, React-router and <span style={brandColor}>Firebase</span> authentication</li>
            <li><span style={brandColor}>Bootstrap</span>, React-bootstrap and sass</li>
            <li><span style={brandColor}>MongoDB</span> and <span style={brandColor}>Express</span></li>
            <li>Custom and secure api</li>
            <li>Responsive and attractive design</li>
          </ul>
        </div>
        <div className="col-md-6 mt-5">
          <h3>My skills</h3>
          <br />
          <small>Working with react and crud applications, admin and user authentication, responsive and classic design are my stregths.My skillset can be discovered from my Github.</small>
          <br />
          <br />
          <button className="btn" style={{backgroundColor: '#1864b5'}}> <a href="https://github.com/samihaTasnim?tab=repositories" className="text-white" style={{textDecoration: 'none'}}>Visit my Github</a> </button>
          <br />
        </div>
      </div>
      <div className="row mt-5">
        <h3 className="text-center mt-5">Websites I've build</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={TravallyImg} className="card-img-top image-spot" alt="..." />
                <div className="card-body">
                  <p className="text-secondary">Travally  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;<a href="https://travally-fc3e4.web.app/">see it live</a></p>
                  <ul>
                    <li>React, React router, Firebase auth(admin and user), Crud operation</li>
                    <li>Responsive design, animation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={WebsiteImg} className="card-img-top image-spot" alt="..." />
                <div className="card-body">
                  <p className="text-secondary">Funrise   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;<a href="https://funrise-534db.firebaseapp.com/">see it live</a></p>
                  <ul>
                    <li>React, React router, Firebase auth(user), Crud operation</li>
                    <li>Secure api and jwt token</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={EmajohnImg} className="card-img-top image-spot" alt="..." />
                <div className="card-body">
                  <p className="text-secondary">Ema-john   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; <a href="https://ema-john--clone-7a3bf.web.app/">see it live</a></p>
                  <ul>
                    <li>Amazon clone, MongoDB and Stripe integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;