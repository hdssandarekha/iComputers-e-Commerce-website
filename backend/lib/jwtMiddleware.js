import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config() //loading env variables to this page

//middleware to authorize user using JWT token
export default function authorizeUser(req,res,next) 
{
    
        const header = req.header("Authorization") // checking token in header
        if(header != null)
        {
            const token =header.replace("Bearer " , "") // removing "Bearer " from token
    

            //to verify token
            jwt.verify(token ,process.env.JWT_SECRET,  

                //decoded token info
                (error , decoded)=>{

                   if(decoded == null) // invalid token
                {
                    res.status(401).json(
                        {
                            message : "Invalid Token.Please login again"
                        }
                    )
                }
                
                else{
                    req.user = decoded; // attaching decoded info to request
                    next()  
                }
                }
            ) 
        }
        // if no token
        else{
            next() //can go if even there is no token
        }
        
       // next() // to pass it to next person
    }