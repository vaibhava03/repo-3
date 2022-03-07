const cartPopUp=document.getElementById("cartItems");
const Close=document.getElementById("close");
const cart=document.getElementById("hCart");
const main=document.getElementById('main');
cart.addEventListener('click', () =>
{
    cartPopUp.style.display="block";
});
Close.addEventListener('click', () =>
{
    cartPopUp.style.display="none";
});




const products=document.getElementById("products");

products.addEventListener('click', (e) =>
{
    console.log(e.target.className);

     if(e.target.className==="btn-cart"){
        const name = e.target.parentNode.children[0].innerHTML;
    document.getElementById('cart_products').innerHTML=name;


     const notif=document.createElement('div');
     notif.classList.add('toast');
     notif.innerHTML=`<h5>Your product: ${name} is successfully added to cart<h5>`;
     main.appendChild(notif);
     console.log(notif);
     setTimeout(() =>
     {
         notif.remove()
     }, 3000);

    }
});



//html store.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Website</title>
    <link rel="stylesheet" href="e-comm.css">
    <script src="e-comm.js" defer></script>

</head>
<body>
    <header class="header">
<nav class="navig">
<ul class="ulClass">
    <li class="li"><a href="home.html">HOME</a></li>
    <li class="li"><a class="active" href="store.html">STORE</a></li>
    <li class="li"><a href="about.html">ABOUT</a></li>
</ul>
</nav>
<button class="h-cart" id="hCart">CART</button>

    <div class="div1">
        <h1> The Generics</h1>
    
    </div>
</header>
    <main id="main">
        <section class="cart-items" id="cartItems">
            <div id="cart-popup">
                <h3>CART</h3>
                <button id="close">X</button>
                <div id="cart_products"></div>
            </div>
        </section>

        <h3>MUSIC</h3>
        <div class="div2" id="products">
            <div class="div3">
                <h4>ALBUM 1</h4>
                <img src="music1.jpg" alt="">
                    <h5>$20.9</h5>
                    <button class="btn-cart">ADD TO CART</button>
            </div>
            <div class="div3">
                <h4>ALBUM 2</h4>
                <img src="music2.jpg" alt="">
                    <h5>$20.9</h5>
                    <button class="btn-cart">ADD TO CART</button>
            </div>
            <div class="div3" >
                <h4>ALBUM 3</h4>
                <img src="music3.jpg" alt="">
                    <h5>$20.9</h5>
                    <button class="btn-cart">ADD TO CART</button>
            </div>
            <div class="div3">
                <h4>ALBUM 4 </h4>
                <img src="music4.jpg" alt="">
                <h5>$20.9</h5>
                <button class="btn-cart">ADD TO CART</button>
            </div>
        </div>
        <h3>MERCH</h3>
        <div class="div11">
            <div class="div12">
                <h4>T-shirt </h4>
                <img src="merch1.jpg" alt="">
                    <h5>$20.9</h5>
                    <button class="btn-cart">ADD TO CART</button>
            </div>
            <div class="div12">
                <h4 >Coffee Cup</h4>
                <img src="merch2.jpg" alt="">
                    <h5>$20.9</h5>
                    <button class="btn-cart">ADD TO CART</button>
            </div>
        </div>
        <button class="cart"> see the cart</button>
    </main>
    <footer class="footer">
        <h1>The Generics</h1>
        <div class="div13">
            <ul class="ul-class2">
                <li class="li-class">
                    <a href="https://www.youtube.com"><img src="youtubelogo.jpg" class="img"></a>
                    <li class="li-class">
                        <a href="https://www.spotify.com"><img src="Spotify Logo.png" class="img"></a>
                    </li>
                    <li class="li-class">
                        <a href="https://www.facebook.com"><img src="Facebook Logo.png" class="img"></a>
                    </li>
                </li>
            </ul>
        </div>
    </footer>
</body>
</html>



//home.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Website</title>
    <link rel="stylesheet" href="e-comm.css">
    <script src="e-comm.js" defer></script>
</head>
<body>
    <header class="header">
<nav class="navig">
<ul class="ulClass">
    <li class="li"><a class="active" href="home.html">HOME</a></li>
    <li class="li"><a href="store.html">STORE</a></li>
    <li class="li"><a href="about.html">ABOUT</a></li>
</ul>
</nav>

<div class="div1">
    <h1> The Generics</h1>
</div>

<div class="div22">
    <button class="btn-album">Get our Latest Album</button>
    <button class="btn-play">►</button>
</div>
</header>
<main>
<section>
    <h3>TOURS</h3>
    <div class="tours-div">
        <div class="tours">
            <span class="date">
                JULY 6
            </span>
            <span class="place">   
                DETROIT, MI
            </span>
            <span class="add">          
                DTE ENERGY MUSIC THEATRE
            </span>
            <button class="tickets">BUY TICKETS</button>
        </div>
        <div class="tours">
            <span class="date">
                JULY 19
            </span>
            <span class="place">   
                TORONTO,ON
            </span>
            <span class="add">          
                BUDWEISER STAGE
            </span>
            <button class="tickets">BUY TICKETS</button>
        </div>
        <div class="tours">
            <span class="date">
                JULY 22
            </span>
            <span class="place">   
                BRISTOW,VA
            </span>
            <span class="add">          
                JIGGY LUBE LIVE
            </span>
            <button class="tickets">BUY TICKETS</button>
        </div>
        <div class="tours">
            <span class="date">
                JULY 29
            </span>
            <span class="place">   
               PHOENIX,AZ
            </span>
            <span class="add">          
                AK-CHIN PAVILION
            </span>
            <button class="tickets">BUY TICKETS</button>
        </div>
        <div class="tours">
            <span class="date">
                AUGUST 2
            </span>
            <span class="place">   
                LAS VEGAS,NV
            </span>
            <span class="add">          
               T-MOBILE ARENA
            </span>
            <button class="tickets">BUY TICKETS</button>
        </div>
        <div class="tours">
            <span class="date">
                AUGUST 7
            </span>
            <span class="place">   
               CONCORD,CA
            </span>
            <span class="add">          
               CONCORD PAVILION
            </span>
            <button class="tickets">BUY TICKETS</button>
        </div>
       
    </div>
</section>
</main>
<footer class="footer">
    <h1>The Generics</h1>
  
</footer>
</body>
</html>


//about.js

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Website</title>
    <link rel="stylesheet" href="e-comm.css">
    <script src="e-comm.js" defer></script>

</head>
<body>
    <header class="header">
<nav class="navig">
<ul class="ulClass">
    <li class="li"><a href="home.html">HOME</a></li>
    <li class="li"><a href="store.html">STORE</a></li>
    <li class="li"><a class="active" href="about.html">ABOUT</a></li>
</ul>
</nav>

<div class="div1">
    <h1> The Generics</h1>
</div>
</header>
<main>
<section class="about">

    <h3>ABOUT</h3>
    <p>
        Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, 
        hates no prosecutors will unfold in the enduring of which were born in it? 
        Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure,
         accepted explain up to now. , The things we are accusing of these in the explication of the truth receives 
         from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures 
         of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him 
         receives at another time he may please the one that those works, we are less than they, this refused to the 
         pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by 
         corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. 
         We hate the fellow.
Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore,
 an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that 
 question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is 
 often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.
    </p>
</section>
</main>
<footer class="footer">
    <h1>The Generics</h1>
    <div class="div13">
        <ul class="ul-class2">
            <li class="li-class">
                <a href="https://www.youtube.com"><img src="youtubelogo.jpg" class="img"></a>
                <li class="li-class">
                    <a href="https://www.spotify.com"><img src="Spotify Logo.png" class="img"></a>
                </li>
                <li class="li-class">
                    <a href="https://www.facebook.com"><img src="Facebook Logo.png" class="img"></a>
                </li>
            </li>
        </ul>
    </div>

</footer>
</body>
</html>


//css file

@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
}

 body{
    justify-content: center;

 } 
      /*----------------HEADER-------------------*/
.header{

    text-align: center;
    margin:0;
    width:100%;
    color:white;
    border-bottom:0.1rem solid white;
}

.ulClass{
    position:fixed;
    display:flex;
    padding:10px;
    list-style-type: none;
    justify-content: center;
    font-size: 20px;
    background-color:#210a30;
    width:100%;
}

.li{
    padding:5px;
    color:white;
    align-self: center;
    list-style: none;
    width:200px;
}

.li a.active
{
    text-decoration: underline white 3px;
}

.h-cart{
    background:rgb(75, 44, 97);
    position:fixed;
    text-decoration: none;
    top: 10px;
    right:10px;
    width:70px;
    height:30px;
    border-color: white;
    border-radius: 10px;
    list-style: none;
    color:white;
    font-size:inherit;
}
a{
    text-decoration: none;
    color:white;
}
.div1{

    padding:50px;
    background-color: rgb(103, 90, 121);
    color:white;
    text-align: center;
    font-size:50px;
}
.div22{
    background-color: rgb(103, 90, 121);
    color:white;
    text-align: center;
    height:150px;
}
.btn-album{

    border: 1px solid #401a47;
    padding: 15px 30px;
    font-size: 23px;
    font-weight: 200;
    background: inherit;
    cursor: pointer;
    color: white;
}
.btn-play{
    border-radius: 50%;
    font-size: 50px;
    padding:9px;
    color:#401a47;
    margin: 10px auto;
    cursor: pointer;
    display: block;
}

.cart-items{
    top: 50px;
    right:0px;
    width:25%;
    height:100%;
    position:fixed;
    background-color: white;
    display:none;
}

#cart-popup.active{
    display:block;
}

#cart-popup{
    text-align: center;
    top:0%;
    width:100%;
    height:inherit;
    position:relative;
    background-color: inherit;
}
#close{
    position:fixed;
    top: 50px;
    right:10px;
    width:25px;
    height:30px;
    border-radius: 5px;
    color:rgb(5, 5, 5);
    font-size:inherit;
}

/*---------------------------MAIN---------------------------*/


main{
    text-align: center;
    margin:0;
    width:100%;
}
h3{
    text-align: center;
    padding-top:30px;
    font-family: Rye;
    font-size: 30px;
}

.div2{
   display: flex;
   flex-wrap:wrap;
   justify-content: space-around;
}
.div3{
        margin: 30px;
        margin-top: 30px;
        margin-right: 30px;
        margin-bottom: 30px;
        margin-left: 30px;
    }
    
img{
    width:300px;
    height:300px;
}

.div11{
display: flex;
flex-wrap:wrap;
justify-content: space-around;
}

.div12
{
    margin: 30px;
    margin-top: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
}

.btn-cart{
    background:rgb(132, 216, 164);
    text-decoration: none;
    top: 10px;
    right:10px;
    width:150px;
    height:40px;
    border-color: white;
    border-radius: 10px;
    color:white;
    font-size:inherit;
} 
h4{
    padding-top:10px;
    padding-bottom:40px;
    font-size: 22px;
    font-family:Arial, Helvetica, sans-serif
}
h5{
    padding-top:10px;
    padding-bottom:10px;
    font-size: 17px;
}

.cart{
    background:rgb(13, 182, 194);
    top: 10px;
    right:10px;
    width:150px;
    height:40px;
    border-color: white;
    border-radius: 10px;
    color:white;
    font-size:inherit;
}

.about{
    max-width: 900px;
    margin: 0 auto;
    font-size: 20px;

    }

.tours-div{
padding-top: 30px;
    }
    
    .tours{
        display: flex;
        margin: 0px auto;
        max-width: 900px;
        justify-content: center;
        border-bottom:1px dashed black;
    }
    .date{
        width:12%;
    }
    .place {
        width:15%;
        color:#777;
    }
    .add{
        width:30%;
        color:#777;
    }

    .tickets{
        margin:10px;
        width:auto;
        border: 1px solid #401a47;
        border-radius: 10px;
        padding: 10px 30px;
        font-size: 15px;
        font-weight: 200;
        background-color: #422e50;
        cursor: pointer;
        color: white;
    }

    .toast{
        right:0px;
        bottom:0px;
        width:20%;
        height:10%;
        margin-right: 3%;
        margin-bottom: 3%;
        border-radius: 20px;
        border: 1px solid black;
        background-color: rgb(180, 199, 156);
        position:fixed;
    }
/*-----------------------FOOTER-----------------------*/

.footer{
    display: flex;
    margin-top: 40px;
    padding: 20px;
    color:white;
    background-color: rgb(103, 90, 121);
}

p{
font-family:Verdana, Geneva, Tahoma, sans-serif; 
color:#777;
padding-top: 20px;

}
.div13{
    top: 10px;
    right:10px;
    width:200px;
    height:auto;
    margin-left: auto;
}
.ul-class2{
    display:flex;
    padding:10px;
    list-style-type: none;
    justify-content: center;
    font-size: 20px;
}
.li-class{
   width:40px;
   height:40px;
   padding:2px;
}
.img{
    object-fit: contain;
    height:100%;
    width:100%
}
