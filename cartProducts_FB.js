//DOM-MANIP


const cartPopUp=document.getElementById("cartItems");
const Close=document.getElementById("close");
const cart=document.getElementById("hCart");
const main=document.getElementById('main');
const cart_products=document.getElementById('cart_products');
const products_DIS=document.getElementById('products');

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
        const image = e.target.parentNode.children[1].src;
        const price = e.target.parentNode.children[2].innerHTML;
        purchaseItems=document.createElement('div');
        purchaseItems.classList.add('purchaseItems');
        purchaseItems.innerHTML=`<span class="nameS"><img src=${image} class="imageBox"><h4>${name}</h4></span><h5 class="priceS">${price}</h5><h5>1</h5><button id="remove">DELETE</button>`;
        cart_products.appendChild(purchaseItems);
        const obj={
            name:name,
            userId:1
        }
        axios.post("http://localhost:3000/cart", obj)
        .then((req, res) =>
        {
            console.log(req.body);
        })
        .catch(err => console.log(err));


    const notif=document.createElement('div');
     notif.classList.add('toast');
     notif.innerHTML=`<h5>Your product: ${name} is successfully added to cart<h5>`;
     main.appendChild(notif);
     setTimeout(() =>
     {
         notif.remove()
     }, 3000);

    }
});


window.addEventListener('DOMContentLoaded', (event) => {
axios.get("http://localhost:3000/products")
.then((response) =>
{
    
  for(var i=0;i<response.data.length;i++) {  
      console.log(response);
    product_Detail=document.createElement('div');
    product_Detail.classList.add('div3');
   product_Detail.innerHTML=`<h4>${response.data[i].title}</h4><img src="${response.data[i].imageUrl}" alt="">
       <h5>$${response.data[i].price}</h5>
       <button class="btn-cart">ADD TO CART</button>`;
       products_DIS.appendChild(product_Detail)
}
})
.catch((error) =>
  {
      console.log(error);
  });
});



//app.js


const path=require('path');
    const express=require('express');
    const bodyParser=require('body-parser');
    const app=express();
    app.set('view engine', 'ejs');
    const adminRoutes=require('./routes/admin');
    const shopRoutes=require('./routes/shop');
    const contactRoutes=require('./routes/contact');
    const productsController=require('./controllers/error.js');
    const sequelize=require('./util/database');
    const Product=require('./models/product');
    const User=require('./models/user');
    const Cart=require('./models/cart');
    const CartItem=require('./models/cart-item');

   // app.use(bodyParser.urlencoded({extended:false}));
   app.use(bodyParser.json());

    const cors=require('cors');
    app.use(cors());
    app.use(express.static(path.join(__dirname,'public')));
    app.use((req, res, next) =>
    {
      User.findByPk(1)
      .then(user  =>
        {
          req.user=user;
          next();
        })
        .catch(err => console.log(err));
    });
    app.use(adminRoutes);
    app.use(shopRoutes);
    app.use(contactRoutes);

   // app.use(productsController.get404);

   

   app.post('/cart', (req, res) =>
   {
     CartItem.create({
       productId:req.body.productId,
       CartId:1,
       quantity:1
     })
     .then(cartItem =>
      {
        res.send(cartItem);
      })
      .catch(err => console.log(err));
   });


    Product.belongsTo(User,{constraints: true, onDelete:'CASCADE'});
    User.hasMany(Product);
    User.hasOne(Cart);
    Cart.belongsTo(User);
    Cart.belongsToMany(Product, {through:CartItem});
    Product.belongsToMany(Cart, {through:CartItem});


    sequelize
    .sync()
    .then(result =>{
     return User.findByPk(1);
    })
    .then(user =>
      {
        if(!user)
        {
          return User.create({name:'max',email:'test@gmail.com'});
        }
        return user;
      })
      .then(user =>
        {
          return user.createCart();
        })
        .then(cart =>
          {
            app.listen(3000);
          })
    .catch(err =>{
        console.log(err);
    });


