import express from 'express';
import { productController, getProductController } from './controller/product.controller';

const app = express();

app.use(express.json());

// criando o endpoint products
app.post('/products', productController);

// pegando o endpoint products
app.get('/products', getProductController);

export default app;
