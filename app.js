const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin');

const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).send(`<html>
            <head><title>404 Not Found</title></head>
        <body>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
          </body>
        </html>`);
})

app.listen(3000);
