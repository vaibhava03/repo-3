//e-comm.js




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






//shop.js controller---backend



const Product = require('../models/product');
const Cart = require('../models/cart');
const cartItem=require('../models/cart-item');


exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products =>{
    res.json(products);
    // res.render('shop/product-list', {
    //   prods:products,
    //   pageTitle:'All Products',
    //   path: '/products'
  // });
}).catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({where:{id: prodId}})
  // .then(product =>
  //   {
  //     res.render('shop/product-detail', {
  //       product: product[0],
  //       pageTitle: product[0].title,
  //       path: '/products'
  //     });
  //   })
  // .catch(err => console.log(err));
  Product.findByPk(prodId)
  .then(product =>
  {
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: product[0].title,
      path: '/products'
    });
  })
  .catch(err => console.log(err));
};


exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(products =>{
    res.render('shop/index', {
      prods:products,
      pageTitle:'All Products',
      path: '/'
  });
}).catch(err => console.log(err));
};


exports.getCart = (req, res, next) => {
cartItem.findAll()
 .then(cart =>
{
    return cart.getProducts()
    .then(products =>
      {
        
        res.render('shop/cart', {
          path:'/cart',
          pageTitle:'Your Cart',
          products: products
        });
      })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;

  let fetchedCart;
  let newQuantity=1;
 req.user.getCart()
 .then(cart =>

  {
    fetchedCart=cart;
    return cart.getProducts({where: { id: prodId}} );
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
      return product;
    }
    return Product.findByPk(prodId)
  })
  .then(product =>{
    return fetchedCart.addProduct(product, { 
        through: { quantity: newQuantity}
      });
  })
  .then(()=>
    {
      res.redirect('/cart');
    })
  .catch(err => console.log(err));
};



exports.postCartDeleteProduct=(req, res, next) =>
{
const prodId=req.body.prodId;
req.user.getCart()
.then(cart =>
  {
    return cart.getProducts( { id: prodId});
  })
  .then(products =>
    {
     console.log("products are ");

     const product=products[0];
     console.log(product);
      return product.cartItem.destroy();
    })
    .then(result =>
      {
        res.redirect('/cart');
      })
      .catch(err =>console.log(err));
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

