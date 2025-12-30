import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config() //loading env variables to this page


//crud operation - create user
export function createUser(req , res){

    const hashedPassword = bcrypt.hashSync(req.body.password ,10)

    const user = new User(
        {
            email : req.body.email,
            firstName : req.body.firstName,
            lastName : req.body.firstName,
            password : hashedPassword
        }
    )


    user.save().then(
        ()=> {
            res.json(
                {
                    message : "user created successfully"
                }
        )
    }
    ).catch(
        () => {
            res.json(
                {
                    message : "user creation"
                }
        )
    }
        
    )
} 

//function with async await
//you can use either of the two functions(createUser or createUserAsync) for creating user
export async function createUserAsync(req , res){

const hashedPassword = bcrypt.hashSync(req.body.password ,10);

    const user = new User(
        {
            email : req.body.email,
            firstName : req.body.firstName,
            lastName : req.body.firstName,
            password : hashedPassword
        }
    )

    try{
await user.save();
        res.json(
                {
                    message : "user created successfully"
                }
        )
    }
    catch(error){
        res.json(
                {
                    message : "user creation failed"
                }
        )   
    }
}

//crud operation(Read) - login user
export function loginUser(req , res){
User.findOne(
    {
        email : req.body.email
    } ).then(
    (user)=>{
        if(user == null)
        {
        return res.status(404).json(
                {
                    message : "user with given email not found"
                }
            )
        }
        else{
            const isPasswordValid = bcrypt.compareSync(req.body.password , user.password)

            if(isPasswordValid)
            {
                const token = jwt.sign(
                    {
                        email :user.email,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        role : user.role,
                        image : user.image,
                        isEmailVerified : user.isEmailVerified
                    } ,
                    process.env.JWT_SECRET) 
                
                
                    
                res.json(
                    {
                        message : " Login Successful",
                        token : token,
                        role : user.role
                    }
                )
            }
            else{
            res.status(401).json(
                    {
                        message : "invalid Password"
                    }
                )
            }
        }
    }
).catch(
    () =>(
        res.status(500).json(
        {
            message : "Internal Server Error"
        }
    )
    )
) 
}

//utility function to check if logged in user is admin 
export function isAdmin(req){
    if(req.user == null){
        return false;
    }
    if(req.user.role == "admin"){
        return true;
    }
    else{
        return false;
    }
}
