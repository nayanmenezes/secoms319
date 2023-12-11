import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const App = () => {
  const [page, setPage] = useState("about");
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [nbaCards, setNbaCards] = useState([]);
  const [nflCards, setNflCards] = useState([]);
  const [league, setLeague] = useState("");
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [description, setDescription] = useState("");
  const [buyPrice, setBuyPrice] = useState();
  const [bidPrice, setBidPrice] = useState();

  const [formData, setFormData] = useState({
    inputName: "",
    inputEmail4: "",
    inputCard: "",
    inputAddress: "",
    inputAddress2: "",
    inputCity: "",
    inputState: "",
    inputZip: "",
  });

  // UNCOMMENT THIS FOR BACKEND
  // im not actually sure if this is right

  // Also delete folder "images" in the public folder when ready for backend

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "inputCard") {
      // remove all characters that arnt a number
      const cleanedValue = value.replace(/\D/g, "");

      if (cleanedValue.length <= 16) {
        const formattedValue = cleanedValue
          .replace(/(\d{4})(?=\d)/g, "$1-")
          .slice(0, 19);
        setFormData({
          ...formData,
          [id]: formattedValue,
        });
      }
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const cardRegex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    const zipRegex = /^[0-9]{5}$/;

    if (!formData.inputName.trim()) {
      errors.inputName = "Name is required";
    }

    if (!formData.inputEmail4) {
      errors.inputEmail4 = "Email is required";
    } else if (!emailRegex.test(formData.inputEmail4)) {
      errors.inputEmail4 = "Email is not valid";
    }

    if (!formData.inputCard) {
      errors.inputCard = "Card number is required";
    } else if (!cardRegex.test(formData.inputCard)) {
      errors.inputCard = "Card number is not valid";
    }

    if (!formData.inputAddress.trim()) {
      errors.inputAddress = "Address is required";
    }

    if (!formData.inputCity.trim()) {
      errors.inputCity = "City is required";
    }

    if (!formData.inputState) {
      errors.inputState = "State is required";
    }

    if (!formData.inputZip) {
      errors.inputZip = "Zip code is required";
    } else if (!zipRegex.test(formData.inputZip)) {
      errors.inputZip = "Zip code is not valid";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (var i = 0; i < cart.length; i++) {
      let league = cart[i].league;
      let price = cart[i].price;
      if (cart[i].cardType) {
        fetch(
          "http://127.0.0.1:8081/delete/" + cart[i].league + "/" + cart[i].alt,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        fetch("http://127.0.0.1:8081/update/" + cart[i].alt, {
          method: "PUT",
          body: JSON.stringify({
            price,
            league,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    }

    if (validateForm()) {
      setIsFormSubmitted(true);
      setShowCheckout(false);
    }
  };

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  // Delete this section  up to next comment when connecting backend.

  // End of delete

  const handleShowCart = () => {
    setShowCart(!showCart);
    if (showCheckout) {
      setShowCheckout(false);
    }
  };

  const handleShowCheckout = () => {
    setShowCheckout(!showCheckout);
    if (showCart) {
      setShowCart(false);
    }
  };

  const handleSetPage = (newPage) => {
    setPage(newPage);
    setSelectedCard(null);
    setShowCart(false);
    setShowCheckout(false);
    setIsFormSubmitted(false);
  };

  const resetOrder = () => {
    setCart([]);
    setCartTotal(0);
    setShowCheckout(false);
    setIsFormSubmitted(false);
    setFormData({
      inputName: "",
      inputEmail4: "",
      inputCard: "",
      inputAddress: "",
      inputAddress2: "",
      inputCity: "",
      inputState: "",
      inputZip: "",
    });
  };

  const renderAbout = () => {
    return (
      <div className="credits">
        <h1>
          <strong>Date:</strong> December 13, 2023
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

  // functions for shopping cart
  const addToCart = (item, typeCard, price) => {
    const cartItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
      cardType: typeCard,
      price: parseFloat(price),
    };
    setCart([...cart, cartItem]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateCartTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(total);
  };

  useEffect(() => {
    updateCartTotal();
  }, [cart]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const renderCart = () => {
    if (!showCart) return null;

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
      <div className="container my-4">
        <h3 className="mb-3">Your Cart Items</h3>
        <ul className="list-group">
          {cart.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="image-container me-3">
                <img
                  src={item.src}
                  alt={item.title}
                  className="img-thumbnail"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="item-details flex-grow-1">
                <h6 className="my-0">{item.title}</h6>
                <small className="text-muted">
                  Price: ${item.price.toFixed(2)}
                </small>
              </div>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Total</strong>
            <span>${totalPrice.toFixed(2)}</span>
          </li>
        </ul>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn btn-secondary"
            onClick={() => setShowCart(false)}
          >
            Close Cart
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleShowCheckout()}
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    );
  };

  const renderCheckoutForm = () => {
    if (!showCheckout) return null;

    return (
      <div className="container mt-5">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputName">Full Name</label>
            <input
              type="text"
              className={`form-control ${
                formErrors.inputName ? "is-invalid" : ""
              }`}
              id="inputName"
              value={formData.inputName}
              onChange={handleInputChange}
            />
            <div className="invalid-feedback">{formErrors.inputName}</div>
          </div>

          <div className="form-group">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className={`form-control ${
                formErrors.inputEmail4 ? "is-invalid" : ""
              }`}
              id="inputEmail4"
              value={formData.inputEmail4}
              onChange={handleInputChange}
            />
            <div className="invalid-feedback">{formErrors.inputEmail4}</div>
          </div>

          <div className="form-group">
            <label htmlFor="inputCard">Card Number</label>
            <input
              type="text"
              className={`form-control ${
                formErrors.inputCard ? "is-invalid" : ""
              }`}
              id="inputCard"
              value={formData.inputCard}
              onChange={handleInputChange}
            />
            <div className="invalid-feedback">{formErrors.inputCard}</div>
          </div>

          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              value={formData.inputAddress}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2 (Optional)</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              value={formData.inputAddress2}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={formData.inputCity}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputState">State</label>
            <select
              id="inputState"
              className="form-control"
              value={formData.inputState}
              onChange={handleInputChange}
            >
              <option value="">Choose...</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="inputZip">ZIP</label>
            <input
              type="text"
              className={`form-control ${
                formErrors.inputZip ? "is-invalid" : ""
              }`}
              id="inputZip"
              value={formData.inputZip}
              onChange={handleInputChange}
            />
            <div className="invalid-feedback">{formErrors.inputZip}</div>
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    );
  };

  const renderOrderSummary = () => {
    if (!isFormSubmitted) return null;

    const orderItems = cart.map((item, index) => (
      <li key={index} className="list-group-item d-flex align-items-center">
        <img
          src={item.src}
          alt={item.title}
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <div>
          {item.title} - ${item.price.toFixed(2)}
        </div>
      </li>
    ));

    return (
      <div className="container mt-5">
        <h2>Order Summary</h2>
        <div className="card">
          <div className="card-header">Thank you for your order!</div>
          <div className="card-body">
            <h5 className="card-title">Order Details</h5>
            <p className="card-text">Name: {formData.inputName}</p>
            <p className="card-text">Email: {formData.inputEmail4}</p>
            <p className="card-text">Address: {formData.inputAddress}</p>
            {formData.inputAddress2 && (
              <p className="card-text">Address 2: {formData.inputAddress2}</p>
            )}
            <p className="card-text">City: {formData.inputCity}</p>
            <p className="card-text">State: {formData.inputState}</p>
            <p className="card-text">Zip: {formData.inputZip}</p>
          </div>
          <ul className="list-group list-group-flush">{orderItems}</ul>
          <div className="card-body">
            <p className="card-text">
              <strong>Total: ${cartTotal.toFixed(2)}</strong>
            </p>
            <button onClick={resetOrder} className="btn btn-primary">
              Place New Order
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CardDetails = ({ card, setSelectedCard }) => {
    const [updateBid, setUpdateBid] = useState();
    if (!card) return null;

    const handleBuyNow = () => {
      addToCart(card, true, card.buyPrice);
      setSelectedCard(null);
    };

    const handleBid = () => {
      addToCart(card, false, updateBid);
      setSelectedCard(null);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{card.title}</h1>
        <img
          src={card.src}
          alt={card.alt}
          style={{ width: "300px", height: "400px" }}
        />
        <p>{card.description}</p>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleBuyNow}
          >
            Buy Now: ${card.buyPrice}
          </button>
        </div>
        <form onSubmit={handleBid}>
          <div class="form-group updateCard w-100">
            <label>Current Bid Price: ${card.bidPrice}</label>
            <input
              type="number"
              class="form-control"
              value={updateBid}
              onInput={(e) => setUpdateBid(e.target.value)}
              min={card.bidPrice + 0.01}
              step="0.01"
            />
          </div>
          <button type="submit" class="btn btn-success updateButton">
            Submit Bid
          </button>
        </form>
        <br />
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          style={{ marginTop: "20px" }}
          onClick={() => setSelectedCard(null)}
        >
          Back
        </button>
      </div>
    );
  };

  const PostCards = () => {
    const leagueAvailable = ["NBA", "NFL"];

    const postEntry = async (e) => {
      e.preventDefault();
      let result = await fetch("http://127.0.0.1:8081/post", {
        method: "POST",
        body: JSON.stringify({
          league,
          src,
          alt,
          description,
          buyPrice,
          bidPrice,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

    return (
      <div>
        <form className="form-container" onSubmit={postEntry}>
          <div class="form-group postCard w-25">
            <label>League</label>
            <select
              id="inputState"
              className="form-control"
              value={league}
              onChange={(e) => setLeague(e.target.value)}
              required
            >
              <option>Choose...</option>
              {leagueAvailable.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div class="form-group postCard w-25">
            <label>Image</label>
            <input
              class="form-control"
              value={src}
              onChange={(e) => setSrc(e.target.value)}
              required
            />
          </div>
          <div class="form-group postCard w-25">
            <label for="">Alternate Image Description</label>
            <input
              class="form-control"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              required
            />
          </div>
          <div class="form-group postCard w-25">
            <label>Description of Product</label>
            <input
              class="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div class="form-group postCard w-25">
            <label>Buy Now Price</label>
            <input
              class="form-control"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              required
            />
          </div>
          <div class="form-group postCard w-25">
            <label>Bid Price</label>
            <input
              class="form-control"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };

  const FetchNFLInfo = () => {
    fetch("http://localhost:8081/NFL")
      .then((response) => response.json())
      .then((result) => {
        setNflCards(result);
      });
  };

  useEffect(() => FetchNFLInfo(), []);

  const RenderNFLListings = () => {
    const filteredNFLCards = nflCards.filter(
      (
        card // Replace sampleNFLCards with nflCards for backend
      ) => card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

        <div className="container">
          <div className="search-bar-container mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for cards"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="row">
            {filteredNFLCards.map((card, index) => (
              <div className="col-lg-4" key={index}>
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    src={card.src}
                    alt={card.alt}
                    style={{ height: "400px", width: "100%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <p className="card-text">Buy Now: ${card.buyPrice}</p>
                    <p className="card-text">Bid Price: ${card.bidPrice}</p>
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      onClick={() => handleCardClick(card)}
                    >
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  };
  const FetchNBAInfo = () => {
    fetch("http://localhost:8081/NBA")
      .then((response) => response.json())
      .then((result) => {
        setNbaCards(result);
      });
  };

  useEffect(() => FetchNBAInfo(), []);

  const RenderNBAListings = () => {
    const filteredNBACards = nbaCards.filter(
      (
        card // Replace sampleNFLCards with nflCards for backend
      ) => card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

        <div className="container">
          <div className="search-bar-container mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for cards"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="row">
            {filteredNBACards.map((card, index) => (
              <div className="col-lg-4" key={index}>
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    src={card.src}
                    alt={card.alt}
                    style={{ height: "400px", width: "100%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <p className="card-text">Buy Now: ${card.buyPrice}</p>
                    <p className="card-text">Bid Price: ${card.bidPrice}</p>
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      onClick={() => handleCardClick(card)}
                    >
                      See More...
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
                onClick={() => handleSetPage("about")}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleSetPage("nfl")}
              >
                NFL Listings
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleSetPage("nba")}
              >
                NBA Listings
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleSetPage("postCards")}
              >
                Post a Card
              </button>
            </li>
          </ul>
          <div className="ml-auto">
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleShowCart()}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>
      </nav>

      {showCart ? (
        renderCart()
      ) : isFormSubmitted ? (
        // if form is submitted then shows the order summary
        renderOrderSummary()
      ) : showCheckout ? (
        // if checkout button is closed then show checkout form
        renderCheckoutForm()
      ) : (
        // default view for selected card or current page
        <>
          {selectedCard ? (
            <CardDetails
              card={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          ) : (
            <>
              {page === "about" && renderAbout()}
              {page === "nfl" && RenderNFLListings()}
              {page === "nba" && RenderNBAListings()}
              {page === "postCards" && PostCards()}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
