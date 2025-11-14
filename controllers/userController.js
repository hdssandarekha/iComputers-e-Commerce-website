import User from "../models/user.js";
import bcrypt from "bcrypt";

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

export function loginUser(req , res){
   User.findOne(
    {
        email : req.body.email
    }
   ).then(
    (user)=>{
        if(user == null)
        {
            res.json(
                {
                    message : "user with given email not found"
                }
            )
        }
        else{
            const isPasswordValid = bcrypt.compareSync(req.body.password , user.password)

            if(isPasswordValid)
            {
                res.json(
                    {
                        message : " Login Successful"
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
        res.status(500).res.json(
        {
            message : "Internal Server Error"
        }
    )
    )
 ) 
}