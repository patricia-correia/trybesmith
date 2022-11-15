import express from 'express';
import { productController } from './controller/product.controller';

const app = express();

app.use(express.json());

// criando o endpoint products
app.post('/products', productController);

export default app;
