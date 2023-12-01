import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const App = () => {
  const [page, setPage] = useState("about");
  const [nbaCards, setNBACards] = useState([]);
  const [nflCards, setNFLCards] = useState([]);

  const renderAbout = () => {
    return (
      <div className="credits">
        <h1>
          <strong>Date:</strong> November 28, 2023
        </h1>
        <h1>Course Details</h1>
        <p>
          <strong>Course:</strong> COM S 319 Construction of User Interfaces
        </p>
        <h2>Students</h2>
        <p>
          <strong>Name:</strong> Nayan Menezes | <strong>Email:</strong>{" "}
          nayan23@iastate.edu
        </p>
        <p>
          <strong>Name:</strong> Yusef Harb | <strong>Email:</strong>{" "}
          yharb@iastate.edu
        </p>
        <h2>Professor</h2>
        <p>
          <strong>Name:</strong> Abraham Aldaco
        </p>
      </div>
    );
  };

  const renderNFLListings = () => {
    // the backend data for NFL should go here and i think it should work or i think replace with a fecth im not sure
    var renderOnce = false;
    let nfl = [];
    async function fetchCards() {
      await fetch("http://localhost:8081/NFL")
        .then((response) => response.json())
        .then((data) => {
          if (!renderOnce) {
            loadCards(data);
            renderOnce = true;
          }
        });
    }
    fetchCards();

    function loadCards(cards) {
      var mainContainer = document.getElementById("showCards");
      let divRow = document.createElement("div");
      divRow.className = "row";
      mainContainer.appendChild(divRow);
      for (var i = 0; i < cards.length; i++) {
        nfl.push(cards[i]);
        let src = cards[i].src;
        let alt = cards[i].alt;
        let description = cards[i].description;
        let buyPrice = cards[i].buyPrice;
        let bidPrice = cards[i].bidPrice;

        let divCol = document.createElement("div");
        divCol.className = "col-lg-4";
        divCol.innerHTML = `
        <div class="card mb-4 box-shadow">
                <img class="card-img-top" src = ${src} alt=${alt} style="height: 500px; width: 100%; display: block;"  data-holder-rendered="true">
                <div class="card-body" style = {height:"700px";width:"200px"}>
                  <p class="card-text">${description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Buy Now: ${buyPrice}</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Bid Price: ${bidPrice}</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>`;
        divRow.appendChild(divCol);
      }
    }

    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">NFL Card Listings</h1>
              <p className="lead text-body-secondary">
                Explore our wide variety of NFL cards!
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div id="showCards"></div>
          </div>
        </div>
      </main>
    );
  };

  const renderNBAListings = () => {
    var renderOnce = false;
    async function fetchCards() {
      await fetch("http://localhost:8081/NBA")
        .then((response) => response.json())
        .then((data) => {
          if (!renderOnce) {
            loadCards(data);
            renderOnce = true;
          }
        });
    }
    fetchCards();

    function loadCards(cards) {
      var mainContainer = document.getElementById("showCards");
      let divRow = document.createElement("div");
      divRow.className = "row";
      mainContainer.appendChild(divRow);
      for (var i = 0; i < cards.length; i++) {
        let src = cards[i].src;
        let alt = cards[i].alt;
        let description = cards[i].description;
        let buyPrice = cards[i].buyPrice;
        let bidPrice = cards[i].bidPrice;

        let divCol = document.createElement("div");
        divCol.className = "col-lg-4";
        divCol.innerHTML = `
        <div class="card mb-4 box-shadow">
                <img class="card-img-top" src = ${src} alt=${alt} style="height: 500px; width: 100%; display: block;"  data-holder-rendered="true">
                <div class="card-body" style = {height:"700px";width:"200px"}>
                  <p class="card-text">${description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Buy Now: ${buyPrice}</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Bid Price: ${bidPrice}</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>`;
        divRow.appendChild(divCol);
      }
    }

    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">NBA Card Listings</h1>
              <p className="lead text-body-secondary">
                Explore our wide variety of NBA cards!
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div id="showCards"></div>
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
              <button
                className="nav-link btn btn-link"
                onClick={() => setPage("about")}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setPage("nfl")}
              >
                NFL Listings
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setPage("nba")}
              >
                NBA Listings
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {page === "about" && renderAbout()}
      {page === "nfl" && renderNFLListings()}
      {page === "nba" && renderNBAListings()}
    </div>
  );
};

export default App;
