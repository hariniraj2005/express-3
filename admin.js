const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res)=>{
    res.send(`
    <form action="/product" method="POST">
      <input type="text" id="productName" name="productName" placeholder="Product Name" required>
      <br>
      <input type="text" id="productSize" name="productSize" placeholder="Product Size" required>
      <br>
      <button type="submit">Add Product</button>
    </form>
  `)
    })

    router.post('/product', (req,res) => {
       const { productName, productSize } = req.body;
       console.log(`Product Name: ${productName}, Product Size: ${productSize}`);
       //console.log(req.body);
        res.redirect('/');
      });
      

module.exports=router;