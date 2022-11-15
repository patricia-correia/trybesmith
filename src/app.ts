import express from 'express';
import { productController, getProductController } from './controller/product.controller';
import userController from './controller/user.controller';
import orderController from './controller/orders.controller';

const app = express();

app.use(express.json());

// criando o endpoint products
app.post('/products', productController);
// criando o endpoint users
app.post('/users', userController);
// criando o endpoinr orders
app.get('/orders', orderController);
// pegando o endpoint products
app.get('/products', getProductController);

export default app;
