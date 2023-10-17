fetch("data.json")
.then(response => response.json())
.then(cards => {
    console.log("Fetched Cards: ", cards);
    loadCards(cards);
});

function loadCards(cards){
    var nbaImg1 = document.getElementById("nbaImg1");
    var nbaImg2 = document.getElementById("nbaImg2");
    var nbaImg3 = document.getElementById("nbaImg3");
    var nbaImg4 = document.getElementById("nbaImg4");
    var nbaImg5 = document.getElementById("nbaImg5");
    var nbaImg6 = document.getElementById("nbaImg6");
    var nbaImg7 = document.getElementById("nbaImg7");
    var nbaImg8 = document.getElementById("nbaImg8");
    var nbaImg9 = document.getElementById("nbaImg9");
    var nbaTxt1 = document.getElementById("nbaTxt1");
    var nbaTxt2 = document.getElementById("nbaTxt2");
    var nbaTxt3 = document.getElementById("nbaTxt3");
    var nbaTxt4 = document.getElementById("nbaTxt4");
    var nbaTxt5 = document.getElementById("nbaTxt5");
    var nbaTxt6 = document.getElementById("nbaTxt6");
    var nbaTxt7 = document.getElementById("nbaTxt7");
    var nbaTxt8 = document.getElementById("nbaTxt8");
    var nbaTxt9 = document.getElementById("nbaTxt9");
    var nbaBuyPrice1 = document.getElementById("nbaBuyPrice1");
    var nbaBuyPrice2 = document.getElementById("nbaBuyPrice2");
    var nbaBuyPrice3 = document.getElementById("nbaBuyPrice3");
    var nbaBuyPrice4 = document.getElementById("nbaBuyPrice4");
    var nbaBuyPrice5 = document.getElementById("nbaBuyPrice5");
    var nbaBuyPrice6 = document.getElementById("nbaBuyPrice6");
    var nbaBuyPrice7 = document.getElementById("nbaBuyPrice7");
    var nbaBuyPrice8 = document.getElementById("nbaBuyPrice8");
    var nbaBuyPrice9 = document.getElementById("nbaBuyPrice9");
    var nbaBidPrice1 = document.getElementById("nbaBidPrice1");
    var nbaBidPrice2 = document.getElementById("nbaBidPrice2");
    var nbaBidPrice3 = document.getElementById("nbaBidPrice3");
    var nbaBidPrice4 = document.getElementById("nbaBidPrice4");
    var nbaBidPrice5 = document.getElementById("nbaBidPrice5");
    var nbaBidPrice6 = document.getElementById("nbaBidPrice6");
    var nbaBidPrice7 = document.getElementById("nbaBidPrice7");
    var nbaBidPrice8 = document.getElementById("nbaBidPrice8");
    var nbaBidPrice9 = document.getElementById("nbaBidPrice9");
    
    


    var nflImg1 = document.getElementById("nflImg1");
    var nflImg2 = document.getElementById("nflImg2");
    var nflImg3 = document.getElementById("nflImg3");
    var nflImg4 = document.getElementById("nflImg4");
    var nflImg5 = document.getElementById("nflImg5");
    var nflImg6 = document.getElementById("nflImg6");
    var nflImg7 = document.getElementById("nflImg7");
    var nflImg8 = document.getElementById("nflImg8");
    var nflImg9 = document.getElementById("nflImg9");
    var nflTxt1 = document.getElementById("nflTxt1");
    var nflTxt2 = document.getElementById("nflTxt2");
    var nflTxt3 = document.getElementById("nflTxt3");
    var nflTxt4 = document.getElementById("nflTxt4");
    var nflTxt5 = document.getElementById("nflTxt5");
    var nflTxt6 = document.getElementById("nflTxt6");
    var nflTxt7 = document.getElementById("nflTxt7");
    var nflTxt8 = document.getElementById("nflTxt8");
    var nflTxt9 = document.getElementById("nflTxt9");
    var nflBuyPrice1 = document.getElementById("nflBuyPrice1");
    var nflBuyPrice2 = document.getElementById("nflBuyPrice2");
    var nflBuyPrice3 = document.getElementById("nflBuyPrice3");
    var nflBuyPrice4 = document.getElementById("nflBuyPrice4");
    var nflBuyPrice5 = document.getElementById("nflBuyPrice5");
    var nflBuyPrice6 = document.getElementById("nflBuyPrice6");
    var nflBuyPrice7 = document.getElementById("nflBuyPrice7");
    var nflBuyPrice8 = document.getElementById("nflBuyPrice8");
    var nflBuyPrice9 = document.getElementById("nflBuyPrice9");
    var nflBidPrice1 = document.getElementById("nflBidPrice1");
    var nflBidPrice2 = document.getElementById("nflBidPrice2");
    var nflBidPrice3 = document.getElementById("nflBidPrice3");
    var nflBidPrice4 = document.getElementById("nflBidPrice4");
    var nflBidPrice5 = document.getElementById("nflBidPrice5");
    var nflBidPrice6 = document.getElementById("nflBidPrice6");
    var nflBidPrice7 = document.getElementById("nflBidPrice7");
    var nflBidPrice8 = document.getElementById("nflBidPrice8");
    var nflBidPrice9 = document.getElementById("nflBidPrice9")



    if(nbaImg1){
        for(var i = 0; i < cards.nba.length; i++){
            let src = cards.nba[i].src;
            let alt = cards.nba[i].alt;
            let description = cards.nba[i].description;
            let buyPrice = cards.nba[i].buyPrice;
            let bidPrice = cards.nba[i].bidPrice;

            let image = document.createElement("div");
            image.innerHTML = `<img src=${src} class="card-img-top" alt=${alt}></img>`;
            

            let cardText = document.createElement("p");
            cardText.innerHTML = `<p class="card-text">${description}</p>`;

            let buyButton = document.createElement("button");
            buyButton.innerHTML = `<button>Buy Now: ${buyPrice}</button>`;

            let bidButton = document.createElement("button");
            bidButton.innerHTML = `<button>Bid: ${bidPrice}</button>`


            if(i == 0){
                nbaImg1.appendChild(image);
                nbaTxt1.appendChild(cardText);
                nbaBuyPrice1.appendChild(buyButton);
                nbaBidPrice1.appendChild(bidButton);
            }else if(i == 1){
                nbaImg2.appendChild(image);
                nbaTxt2.appendChild(cardText);
                nbaBuyPrice2.appendChild(buyButton);
                nbaBidPrice2.appendChild(bidButton);
            }else if(i == 2){
                nbaImg3.appendChild(image);
                nbaTxt3.appendChild(cardText);
                nbaBuyPrice3.appendChild(buyButton);
                nbaBidPrice3.appendChild(bidButton);  
            }else if(i == 3){
                nbaImg4.appendChild(image);
                nbaTxt4.appendChild(cardText);
                nbaBuyPrice4.appendChild(buyButton);
                nbaBidPrice4.appendChild(bidButton);
            }else if(i == 4){
                nbaImg5.appendChild(image);
                nbaTxt5.appendChild(cardText);
                nbaBuyPrice5.appendChild(buyButton);
                nbaBidPrice5.appendChild(bidButton);
            }else if(i == 5){
                nbaImg6.appendChild(image);
                nbaTxt6.appendChild(cardText);
                nbaBuyPrice6.appendChild(buyButton);
                nbaBidPrice6.appendChild(bidButton);
            }else if(i == 6){
                nbaImg7.appendChild(image);
                nbaTxt7.appendChild(cardText);
                nbaBuyPrice7.appendChild(buyButton);
                nbaBidPrice7.appendChild(bidButton);
            }else if(i == 7){
                nbaImg8.appendChild(image);
                nbaTxt8.appendChild(cardText);
                nbaBuyPrice8.appendChild(buyButton);
                nbaBidPrice8.appendChild(bidButton);
            }else if(i == 8){
                nbaImg9.appendChild(image);
                nbaTxt9.appendChild(cardText);
                nbaBuyPrice9.appendChild(buyButton);
                nbaBidPrice9.appendChild(bidButton);
            }
        }
    }


    if(nflImg1){
        for(var i = 0; i < cards.nfl.length; i++){
            let src = cards.nfl[i].src;
            let alt = cards.nfl[i].alt;
            let description = cards.nfl[i].description;
            let buyPrice = cards.nfl[i].buyPrice;
            let bidPrice = cards.nfl[i].bidPrice;
            


            let image = document.createElement("div");
            console.log(src);
            image.innerHTML = `<img src="${src}" class="card-img-top" alt=${alt}></img>`;
            

            let cardText = document.createElement("p");
            cardText.innerHTML = `<p class="card-text">${description}</p>`;

            let buyButton = document.createElement("button");
            buyButton.innerHTML = `<button>Buy Now: ${buyPrice}</button>`;

            let bidButton = document.createElement("button");
            bidButton.innerHTML = `<button>Bid: ${bidPrice}</button>`;



            if(i == 0){
                nflImg1.appendChild(image);
                nflTxt1.appendChild(cardText);
                nflBuyPrice1.appendChild(buyButton);
                nflBidPrice1.appendChild(bidButton);
            }else if(i == 1){
                nflImg2.appendChild(image);
                nflTxt2.appendChild(cardText);
                nflBuyPrice2.appendChild(buyButton);
                nflBidPrice2.appendChild(bidButton);
            }else if(i == 2){
                nflImg3.appendChild(image);
                nflTxt3.appendChild(cardText); 
                nflBuyPrice3.appendChild(buyButton);
                nflBidPrice3.appendChild(bidButton); 
            }else if(i == 3){
                nflImg4.appendChild(image);
                nflTxt4.appendChild(cardText);
                nflBuyPrice4.appendChild(buyButton);
                nflBidPrice4.appendChild(bidButton);
            }else if(i == 4){
                nflImg5.appendChild(image);
                nflTxt5.appendChild(cardText);
                nflBuyPrice5.appendChild(buyButton);
                nflBidPrice5.appendChild(bidButton);
            }else if(i == 5){
                nflImg6.appendChild(image);
                nflTxt6.appendChild(cardText);
                nflBuyPrice6.appendChild(buyButton);
                nflBidPrice6.appendChild(bidButton);
            }else if(i == 6){
                nflImg7.appendChild(image);
                nflTxt7.appendChild(cardText);
                nflBuyPrice7.appendChild(buyButton);
                nflBidPrice7.appendChild(bidButton);
            }else if(i == 7){
                nflImg8.appendChild(image);
                nflTxt8.appendChild(cardText);
                nflBuyPrice8.appendChild(buyButton);
                nflBidPrice8.appendChild(bidButton);
            }else if(i == 8){
                nflImg9.appendChild(image);
                nflTxt9.appendChild(cardText);
                nflBuyPrice9.appendChild(buyButton);
                nflBidPrice9.appendChild(bidButton);
            }
        }
    }   


}

