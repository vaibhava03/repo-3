//orders.js 

const orders_section=document.getElementById('orders_section');

console.log(orders_section);
axios.get("http://localhost:3000/getorders")
.then(response =>
    {
        
        for(var i=0;i<response.data.length;i++)
        {
            const order_det=document.createElement('div');
            order_det.classList.add("order_det");
            order_det.innerHTML=`<h4>${response.data[i].title}</h4><img src=${response.data[i].imageUrl}><h5>quantity:${response.data[i].cartItem.quantity}</h5>`;
            console.log(order_det);
            orders_section.appendChild(order_det);

        }
    
    })
    .catch(err => console.log(err));



//app.js
app.get('/getorders', (req, res) =>
   {
    req.user.
    getOrders()
    .then(orders =>
    {
      orders.forEach(order => {
      cart_ord.push(order.cartId);
    });
    return cart_ord;
    }).then(cart =>
    {
      for(var i=0;i<cart.length;i++)
     {
      req.user.getCart({where:{id:cart[i]}})
      .then(data =>
        {

         return data.getProducts()
        })
      .then( products =>
      {
        console.log(products);
        res.json(products);
      }).catch( err => console.log(err));

     }

    })
        
      .catch(err=> console.log(err));
  });



//orders.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Website</title>
    <link rel="stylesheet" href="e-comm.css">
    <script src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js'></script>

    <script src="orders.js" defer></script>


</head>
<body>
    <header class="header">
<nav class="navig">
    <ul class="ulClass">
        <li class="li"><a href="store.html">STORE</a></li>
        <li class="li"><a class="active" href="orders.html">ORDERS</a></li>
    </ul>
</nav>
</header>

<section class="orders_section" id =orders_section>
<h5>orders</h5>
</section>
</body>
</html>
