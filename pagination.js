//DOM.js

const cartPopUp=document.getElementById("cartItems");
const Close=document.getElementById("close");
const cart=document.getElementById("hCart");
const main=document.getElementById('main');
const cart_products=document.getElementById('cart_products');
const products=document.getElementById("products");
const purchase=document.getElementById('purchase');
var user_ID=[];

//get products---------------------------------------------------------


window.addEventListener('DOMContentLoaded', (event) => {
axios.get('http://localhost:3000/getproducts-count')
    .then(res =>{
    const totalProducts=res.data;
    var count=1;
    const totalPage=Math.ceil(totalProducts/2);
    const pageview=document.getElementById('pageview');
    while(count<=totalPage){
    const pagination=document.createElement('div');
    pagination.className="pagination";
    pagination.innerHTML=`<input type="hidden" value=${count}><h5 class="pageNum">${count}<h5>`;
    count++;
    pageview.appendChild(pagination);
    }
    pageview.addEventListener('click', (e)  =>
    {
        if(e.target.className==="pageNum") {
        const page = e.target.innerText;
        const value={
        page:page
        }
        console.log(value);
        axios.post("http://localhost:3000/getproducts", value)
        .then(res =>
        {
            if(res.status===200)
            {
                console.log("success");
            }
        })
        .catch(err => console.log(err));
        products.innerText="";
        }
        axios.get("http://localhost:3000/getproducts")
        .then((response) =>
        {
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
        });
    });

})
    
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
    const Product=require('./models/Product');
    const User=require('./models/User');
    const Cart=require('./models/Cart');
    const CartItem=require('./models/CartItem');
    const Order=require('./models/Order');
    const cors=require('cors');


    app.use(cors());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
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



app.get('/getproducts-count',(req, res) =>
{
  Product.findAndCountAll()
  .then(numProducts =>
   {
     res.json(numProducts.count);
   })
});

  app.post('/getproducts', (req, res) =>{
    let page=req.body.page||1;
    let items_per_page=2;
    let totalItems;
    Product.findAndCountAll()
    .then(numProducts =>
     {
       totalItems=numProducts.count;
      return Product.findAll({offset:(page-1)*items_per_page,limit:items_per_page});
     })
     .then(response =>{
      app.get('/getproducts',(req, res) =>
      {
        console.log(response);
        res.json(response);
      })
    })
     .catch(err => console.log(err));
  })


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


