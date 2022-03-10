

//DOM JS FILE

const cartPopUp=document.getElementById("cartItems");
const Close=document.getElementById("close");
const cart=document.getElementById("hCart");
const main=document.getElementById('main');
const cart_products=document.getElementById('cart_products');
const products=document.getElementById("products");
const purchase=document.getElementById('purchase');
var user_ID=[];

cart.addEventListener('click', () =>
{
    cartPopUp.style.display="block";
    axios.get("http://localhost:3000/getcart")
.then((response) =>
{
    for(var i=0;i<response.data.length;i++) {
        const quantity=response.data[i].quantity;
        const cart_items=document.getElementById(response.data[i].productId);

        const name = cart_items.children[0].innerHTML;
        const image = cart_items.children[1].src;
        const price = cart_items.children[2].innerHTML;
        console.log(cart_items);
        purchaseItems=document.createElement('div');
        purchaseItems.classList.add('purchaseItems');
        purchaseItems.innerHTML=`<span class="nameS"><img src=${image} class="imageBox"><h4>${name}</h4></span><h5 class="priceS">${price}</h5><h5>${quantity}</h5><button id="remove">DELETE</button>`;
        cart_products.appendChild(purchaseItems);
    }
 products.style.display="none";

 purchase.addEventListener('click', () =>
{
    const order={
        cartId:response.data[0].cartId
    }
axios.post("http://localhost:3000/getorders", order)
.then((res) =>
{
    if(res.status===200)
    {
        console.log("post success");
    }
})
.catch(err => console.log(err));
});

axios.get("http://localhost:3000/getorders")
.then(response =>
    { var i=0;
console.log(user_ID[0]);
        while(user_ID[0]!==response.data[i].userId)
        {
            i++;
        }
        if(user_ID[0]===response.data[i].userId)
        {
        
            cart_products.innerText=`Order with orderId=${response.data[i].id} is successfull`;
        }

    })
    .catch(err => console.log(err));
})
.catch(err => console.log(err));

});
Close.addEventListener('click', () =>
{
    cartPopUp.style.display="none";
    products.style.display="flex";

});




products.addEventListener('click', (e) =>
{
     if(e.target.className==="btn-cart"){
        const name = e.target.parentNode.children[0].innerHTML;
        const image = e.target.parentNode.children[1].src;
        const price = e.target.parentNode.children[2].innerHTML;
        const productId=e.target.parentNode.children[3].value;
        const userId=e.target.parentNode.children[4].value;


        const obj={
            userId:userId,
            productId:productId
        }
        axios.post("http://localhost:3000/getcart", obj)
        .then((res) =>
        {
            if(res.status===200)
            {
                console.log("posting is successfull");
            }
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
axios.get("http://localhost:3000/getproducts")
.then((response) =>
{
console.log(response .data.length);
  for(var i=0;i<response.data.length;i++) {  
    product_Detail=document.createElement('div');
    product_Detail.id=`${response.data[i].id}`;
    product_Detail.classList.add('div3');
   product_Detail.innerHTML=`<h4>${response.data[i].title}</h4><img src="${response.data[i].imageUrl}" alt="">
       <h5>$${response.data[i].price}</h5><input type="hidden" value="${response.data[i].id}"><input type="hidden" value="${response.data[i].userId}">
       <button class="btn-cart">ADD TO CART</button>`;
       user_ID.push(response.data[0].userId)
       products.appendChild(product_Detail);
}

//     let items_per_page=2;
//     let totalItems=response.data.length;
//     var count=1;
//     const totalPage=Math.ceil(totalItems/items_per_page);
//     const pageview=document.getElementById('pageview');
//     while(count<=totalPage){
//     const pagination=document.createElement('div');
//     pagination.className="pagination";
//     pagination.innerHTML=`<a href="http://127.0.0.1:5500/.FRONTEND/E-COMMERCE/store.html?page=${count}" class="count">${count}</a>`;
//         count++;
//         pageview.appendChild(pagination);

// }
// const page_nav=document.getElementsByClassName("count");
// console.log(page_nav);
// for (var i = 0; i < page_nav.length; i++) {
//     page_nav[i].addEventListener('click', () =>
//     {
//         for(var j=0;j<items_per_page;j++) {  
//             const n=Math.ceil((j+i+1)/totalPage);
//             product_Detail=document.createElement('div');
//             product_Detail.id=`${response.data[n].id}`;
//             product_Detail.classList.add('div3');
//            product_Detail.innerHTML=`<h4>${response.data[n].title}</h4><img src="${response.data[n].imageUrl}" alt="">
//                <h5>$${response.data[n].price}</h5><input type="hidden" value="${response.data[n].id}"><input type="hidden" value="${response.data[n].userId}">
//                <button class="btn-cart">ADD TO CART</button>`;
//                products.appendChild(product_Detail);
   
// }
// });
// }
}).catch(err => console.log(err));
})





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
    const Product=require('./models/Product');
    const User=require('./models/User');
    const Cart=require('./models/Cart');
    const CartItem=require('./models/CartItem');
    const Order=require('./models/Order');
   app.use(bodyParser.urlencoded({extended:false}));
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

  //  app.use(productsController.get404);

   app.post('/getorders', (req, res) =>
   {
    const cartId = req.body.cartId;
Cart.findByPk(cartId)
.then(data =>
  {
      Order.create( {
      userId: data.userId,
    }).then(result =>{
     console.log(result);
        })
    .catch(err =>{
      console.log(err);
    })
    })
  
   })


   app.get('/getorders', (req, res) =>
   {
     Order.findAll()
     .then(orders =>
      {
        res.json(orders);

      })
      .catch(err=> console.log(err));
   });

   app.get('/getproducts', (req, res)=>
   {
    Product.findAll()
    .then(products =>{
     res.json(products)
   })
   .catch(err => console.log(err));
  });


   app.post('/getcart', (req, res) =>
   {
    const prodId=req.body.productId;
    let fetchedCart;
    let newQuantity=1;
        req.user
    .getCart() 
    .then(cart =>
    {
      fetchedCart=cart;
      return cart.getProducts({where:{id:prodId}});
    })
    .then(products =>
    {
      let product;
      if(products.length>0)
      {
        product=products[0];
      }
      if(product)
      {
        const oldQuantity=product.cartItem.quantity;
        newQuantity=oldQuantity+1;
      }
      return Product.findByPk(prodId);
    })
    .then(product =>
      {
        
         fetchedCart.addProduct(product, { through: { quantity: newQuantity} });
      })
     
    .catch(err => console.log(err));
});




app.get('/getcart', (req, res) =>
{
    CartItem.findAll()
    .then(products =>{
      console.log("************",products);
      res.json(products);
    })
    .catch(err => console.log(err));
  });
    

    Product.belongsTo(User,{constraints: true, onDelete:'CASCADE'});
    User.hasMany(Product);
    User.hasOne(Cart);
    Order.belongsTo(User,{constraints: true, onDelete:'CASCADE'});
    User.hasMany(Order);
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


