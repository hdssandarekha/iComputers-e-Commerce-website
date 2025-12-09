import express from 'express';
import { createProduct, getProducts,deleteProduct ,updateProduct, getProductById } from '../controllers/productController.js';


const productRouter = express.Router();

//route for creating product
productRouter.post("/", createProduct);
productRouter.get("/",getProducts);

//just a example for hierarchical routing..this route is not  needed
productRouter.get("/trending",()=> {
    res.status(200).json({message : "Trending products endpoint"})
})

productRouter.delete("/:productId", deleteProduct); //in the URL,any number that after products/, we consider productId as parameter
productRouter.put("/:productId", updateProduct);
productRouter.get("/:productId",getProductById);

export default productRouter;