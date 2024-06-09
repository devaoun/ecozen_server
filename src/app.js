require('dotenv').config()
const express = require('express')
const cors = require('cors');
const errorMiddleWare = require('./middlewares/error');
const notFoundMiddleware = require('./middlewares/notFound');
const authRouter = require('./routes/auth-route');
const productRouter = require('./routes/product-route');
const cartRouter = require('./routes/cart-route');

const app = express();
app.use(express.json());
app.use(cors())

app.use('/auth',authRouter)
app.use('/product',productRouter)
app.use('/cart',cartRouter)


app.use(notFoundMiddleware)
app.use(errorMiddleWare)

const port = process.env.PORT || 8000;
app.listen(port,console.log(`ecozen running on port : ${port}`))