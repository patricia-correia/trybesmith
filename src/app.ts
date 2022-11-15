import express from 'express';
import { productController, getProductController } from './controller/product.controller';
import userController from './controller/user.controller';

const app = express();

app.use(express.json());

// criando o endpoint products
app.post('/products', productController);
// criando o endpoint users
app.post('/users', userController);

// pegando o endpoint products
app.get('/products', getProductController);

export default app;
