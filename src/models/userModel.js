import mongoose from "mongoose";
import bcrypt from 'bcrypt'; 


const Schema = mongoose.Schema;

export const UserSchema = new Schema ({
    userName : {
        type: String, 
        require: true
    },
    email: {
        type: String, 
        // required: true
    }, 

    hashPassword: {
        type: String, 
        required: true
    }, 

    created_date: {
        type: Date, 
        default: Date.now
    }, 
});

//Create a function that will compare passwords
UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword); 
};