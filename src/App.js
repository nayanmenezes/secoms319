import React, { useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [page, setPage] = useState('about');

  const renderAbout = () => {
    return (
      <div className="credits">
        <h1><strong>Date:</strong> November 28, 2023</h1>
        <h1>Course Details</h1>
        <p><strong>Course:</strong> COM S 319 Construction of User Interfaces</p>
        <h2>Students</h2>
        <p><strong>Name:</strong> Nayan Menezes | <strong>Email:</strong> nayan23@iastate.edu</p>
        <p><strong>Name:</strong> Yusef Harb | <strong>Email:</strong> yharb@iastate.edu</p>
        <h2>Professor</h2>
        <p><strong>Name:</strong> Abraham Aldaco</p>
      </div>
    );
  };

  const renderNFLListings = () => {
    // the backend data for NFL should go here and i think it should work or i think replace with a fecth im not sure
    const nflCards = [

    ];
  
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">NFL Card Listings</h1>
              <p className="lead text-body-secondary">Explore our wide variety of NFL cards!</p>
            </div>
          </div>
        </section>
  
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {nflCards.map((card, index) => (
                <div className="col" key={index}>
                  <div className="card shadow-sm">
                    <div id={`nflImg${index + 1}`}></div>
                    <div className="card-body">
                      <p id={`nflTxt${index + 1}`} className="card-text">{card.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button id={`nflBuyPrice${index + 1}`} type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                        <button id={`nflBidPrice${index + 1}`} type="button" className="btn btn-sm btn-outline-secondary">Bid</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  };

  const renderNBAListings = () => {
    // the backend data for NBA should go here or i think replace with a fecth im not sure
    const nbaCards = [
    ];
  
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">NBA Card Listings</h1>
              <p className="lead text-body-secondary">Explore our wide variety of NBA cards!</p>
            </div>
          </div>
        </section>
  
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {nbaCards.map((card, index) => (
                <div className="col" key={index}>
                  <div className="card shadow-sm">
                    <div id={`nbaImg${index + 1}`}></div>
                    <div className="card-body">
                      <p id={`nbaTxt${index + 1}`} className="card-text">{card.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button id={`nbaBuyPrice${index + 1}`} type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                        <button id={`nbaBidPrice${index + 1}`} type="button" className="btn btn-sm btn-outline-secondary">Bid</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  };

  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <a className="navbar-brand">ExpressCards</a>
  <div className="navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <button className="nav-link btn btn-link" onClick={() => setPage('about')}>About Us</button>
      </li>
      <li className="nav-item">
        <button className="nav-link btn btn-link" onClick={() => setPage('nfl')}>NFL Listings</button>
      </li>
      <li className="nav-item">
        <button className="nav-link btn btn-link" onClick={() => setPage('nba')}>NBA Listings</button>
      </li>
    </ul>
  </div>
</nav>

      {page === 'about' && renderAbout()}
      {page === 'nfl' && renderNFLListings()}
      {page === 'nba' && renderNBAListings()}
    </div>
  );
};

export default App;