import { isAdmin } from "./userController.js";
import Product from "../models/product.js"; 
import e from "express";

//crud operation - create product
export async function createProduct(req , res){

    //check if the user is admin
    if(! isAdmin(req)){
        res.status(403).json(
            {
                message : "Access Denied! Admins Only"
            }
        )
        return; 
    }

    try{
        //check if product with given productId already exists
        const existingProduct = await Product.findOne(
            {
                productId : req.body.productId
            }
        )
        if(existingProduct){
            res.status(400).json(
                {
                    message : "Product with given productId already exists"
                }
            )
            return; 
        }

        //create new product
        const data ={}
        data.productId = req.body.productId;

        //if there is no name in the incoming req,return error response
        if(req.body.name == null){
            res.status(400).json(
                {
                    message : "Product name is required"
                }
            )
            return;     
        }
        data.name = req.body.name;

        //if there is a description in the incoming req,put it in this empty JSON object...if there is no description in the req,put an empty string.
        data.description = req.body.description || ""; 
        data.altName = req.body.altName || [];

        if(req.body.price == null){
            res.status(400).json(
                {
                    message : "Product price is required"
                }
            )
            return;     
        }
        data.price = req.body.price;

        //if there is a label price in the incoming req,put it in this empty JSON object...if there is no label price in the req,put the price as the label price.
        data.labelPrice = req.body.labelPrice || req.body.price; 
        data.category = req.body.category || "Others";
        data.image = req.body.image || ["images/default-product-1.png" , "images/default-product-2.png"];
        data.isVisible = req.body.isVisible
        data.brand = req.body.brand || "Generic";
        data.model = req.body.model || "Standard";

        const newProduct = await Product.create(data);
        await newProduct.save();
        res.status(201).json(
            {
                message : "Product created successfully",
                product : newProduct
            }
        )
    }
    catch(error){
        res.status(500).json(
            {
                message : "Error creating product",
                error : error
            }
        )
    }
}

//crud operation - read products
export async function getProducts(req , res){
    try{

        if(! isAdmin(req)){

        //fetch all products from the database
        const products = await Product.find();

        //return the products as a response
        res.status(200).json(products);

        }
        else{
            const products = await Product.find({
                isVisible : true
            })
            res.status(200).json(products);
        }
    }
    catch(error){
        res.status(500).json(
            {
                message : "Error retrieving products",
                error : error
            }
        )
    }
}

//crud operation - delete product
export async function deleteProduct(req , res){

    //check if the user is admin
    if(! isAdmin(req)){
        res.status(403).json(
            {
                message : "Access Denied! Admins Only"
            }
        )
        return; 
    }
    try{
        // get productId from request parameters
        const productId = req.params.productId; 
        await Product.deleteOne(
            {
                productId : productId
            }
        )
        res.status(200).json(
            {
                message : "Product deleted successfully"
            }
        )
    }catch(error){
        res.status(500).json(
            {
                message : "Error deleting product",
                error : error
            }
        )
    }   
}

//crud operation - update product
export async function updateProduct(req , res){
 //check if the user is admin
    if(! isAdmin(req)){
        res.status(403).json(
            {
                message : "Access Denied! Admins Only"
            }
        )
        return; 
    }


    try{
        
        const productId = req.params.productId;

        //update product
        const data ={}
    
        //if there is no name in the incoming req,return error response
        if(req.body.name == null){
            res.status(400).json(
                {
                    message : "Product name is required"
                }
            )
            return;     
        }
        data.name = req.body.name;

        //if there is a description in the incoming req,put it in this empty JSON object...if there is no description in the req,put an empty string.
        data.description = req.body.description || ""; 
        data.altName = req.body.altName || [];

        if(req.body.price == null){
            res.status(400).json(
                {
                    message : "Product price is required"
                }
            )
            return;     
        }
        data.price = req.body.price;

        //if there is a label price in the incoming req,put it in this empty JSON object...if there is no label price in the req,put the price as the label price.
        data.labelPrice = req.body.labelPrice || req.body.price; 
        data.category = req.body.category || "Others";
        data.image = req.body.image || ["images/default-product-1.png" , "images/default-product-2.png"];
        data.isVisible = req.body.isVisible
        data.brand = req.body.brand || "Generic";
        data.model = req.body.model || "Standard";

        //find the product by productId and update it
    await Product.updateOne({productId : productId},data);

        res.status(201).json(
            {
                message : "Product Updated successfully",
            }
        )
    }
    catch(error){
        res.status(500).json(
            {
                message : "Error updating product",
                error : error
            }
        )
    }
    }

//crud operation - get product by id
export async function getProductById(req , res){
        try{
            const productId = req.params.productId;
            const product = await Product.findOne({productId : productId});

            //if product not found
            if(product == null){
                res.status(404).json(
                    {
                        message : "Product not found"
                    }
                )
                return;
                }
            
            //if product is not visible to customers
            if(! product.isVisible){
                if(! isAdmin(req)){
                    res.status(404).json(
                        {
                            message : "Product not found"
                        }
                    )
                    return;
                }
            }
            res.status(200).json(product);

        }catch(error){
            res.status(500).json(
                {
                    message : "Error retrieving product",
                    error : error
                }
            )   

        }
    }
