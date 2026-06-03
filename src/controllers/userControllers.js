import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 

import { UserSchema } from "../models/UserModel";

const User = mongoose.model('User', UserSchema ); 

//function to loggin user
export const loginRequired = (req, res, next) => {
    if(req.user){
        next(); 
    } else {
        res.status(401).json({ message : "Unauthorized User!"}); 
    }
} 

//Function for registaring the users 
export const register = async (req, res) => {
    const newUser = new User(req.body);
    //encrypt with bcrypt
    newUser.hashPassword = bcrypt.hashSync(req.body.hashPassword, 10);
    try {
        const user = await newUser.save();
        
        user.hashPassword = undefined; //hide the password before sending it back
        return res.json(user);
    } catch (err) {
        return res.status(400).send({
            message : err 
        }); 
    }
};

//Adding Login handler function
export const login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            res.status(401).json({ message: "Authentication failed. No user found"}); 
        } else if (user) {
            if (!user.comparePassword(req.body.password, user.hashPassword)) {
                res.status(401).json({ message: "Authentication failed. Wrong password"});
            } else {
                return res.json({token: jwt.sign({
                    email: user.email, 
                    username: user.userName, 
                    _id: user.id
                }, 'RESTFULAPIs')})
            }
        }
    } catch (err) {
        return res.status(500).json({ message: err.message }); 
    }

};
