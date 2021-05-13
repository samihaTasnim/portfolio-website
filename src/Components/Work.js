import React from 'react';
import WebsiteImg from '../screens-4.jpg';
import EmajohnImg from '../Screenshot (217).png';
import TravallyImg from '../Screenshot (218).png';

const Work = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Projects I've done</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
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
  );
};

export default Work;