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



    if(nbaImg1){
        for(var i = 0; i < cards.nba.length; i++){
            let src = cards.nba[i].src;
            let alt = cards.nba[i].alt;
            let description = cards.nba[i].description;


            let image = document.createElement("div");
            image.innerHTML = `<img src=${src} class="card-img-top" alt=${alt}></img>`;
            

            let cardText = document.createElement("p");
            cardText.innerHTML = `<p class="card-text">${description}</p>`;


            if(i == 0){
                nbaImg1.appendChild(image);
                nbaTxt1.appendChild(cardText);
            }else if(i == 1){
                nbaImg2.appendChild(image);
                nbaTxt2.appendChild(cardText);
            }else if(i == 2){
                nbaImg3.appendChild(image);
                nbaTxt3.appendChild(cardText);    
            }else if(i == 3){
                nbaImg4.appendChild(image);
                nbaTxt4.appendChild(cardText);
            }else if(i == 4){
                nbaImg5.appendChild(image);
                nbaTxt5.appendChild(cardText);
            }else if(i == 5){
                nbaImg6.appendChild(image);
                nbaTxt6.appendChild(cardText);
            }else if(i == 6){
                nbaImg7.appendChild(image);
                nbaTxt7.appendChild(cardText);
            }else if(i == 7){
                nbaImg8.appendChild(image);
                nbaTxt8.appendChild(cardText);
            }else if(i == 8){
                nbaImg9.appendChild(image);
                nbaTxt9.appendChild(cardText);
            }
        }
    }


    if(nflImg1){
        for(var i = 0; i < cards.nfl.length; i++){
            let src = cards.nfl[i].src;
            let alt = cards.nfl[i].alt;
            let description = cards.nfl[i].description;
            
            


            let image = document.createElement("div");
            console.log(src);
            image.innerHTML = `<img src="${src}" class="card-img-top" alt=${alt}></img>`;
            

            let cardText = document.createElement("p");
            cardText.innerHTML = `<p class="card-text">${description}</p>`;


            if(i == 0){
                nflImg1.appendChild(image);
                nflTxt1.appendChild(cardText);
            }else if(i == 1){
                nflImg2.appendChild(image);
                nflTxt2.appendChild(cardText);
            }else if(i == 2){
                nflImg3.appendChild(image);
                nflTxt3.appendChild(cardText);    
            }else if(i == 3){
                nflImg4.appendChild(image);
                nflTxt4.appendChild(cardText);
            }else if(i == 4){
                nflImg5.appendChild(image);
                nflTxt5.appendChild(cardText);
            }else if(i == 5){
                nflImg6.appendChild(image);
                nflTxt6.appendChild(cardText);
            }else if(i == 6){
                nflImg7.appendChild(image);
                nflTxt7.appendChild(cardText);
            }else if(i == 7){
                nflImg8.appendChild(image);
                nflTxt8.appendChild(cardText);
            }else if(i == 8){
                nflImg9.appendChild(image);
                nflTxt9.appendChild(cardText);
            }
        }
    }   


}

