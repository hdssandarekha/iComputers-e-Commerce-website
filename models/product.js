import mongoose from "mongoose";


// Define the schema for products
const productSchema = new mongoose.Schema(
    {
        productId  :{
            type : String,
            required : true,
            unique : true
        },

        name:{
            type : String,
            required : true
        },

        description :{
            type : String,
            required : true
        },

        altName :{
            type : [String], // altName is an array of strings
            default : []
        },

        price :{
            type : Number,
            required : true
        },

        labelPrice :{
            type : Number,
        },

        category :{
            type : String,
            default : "Others"
        },

        image :{
            type : [String], // image is an array of strings (URLs or paths)
            default : ["images/default-product-1.png" , "images/default-product-2.png"] // default images
        },

        isVisible :{
            type : Boolean,
            default : true,
            required : true
        },

        brand :{
            type : String,
            default : "Generic"
        },

        model :{
            type : String,
            default : "Standard"
        }
    },
)

const Product  = mongoose.model("Product",productSchema)
export default Product;



