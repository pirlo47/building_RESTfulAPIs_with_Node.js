//schema defination
import mongoose from "mongoose";

//create a schema variable 
const Schema = mongoose.Schema;


export const ContactSchema = new Schema({
    firstName: {
        type: String, 
        require: "Enter a first name"
    }, 
    lastName: {
        type: String, 
        require: "Enter a last name"
    }, 
    email: {
        type: String, 
        // required: true
    }, 
    company: {
        type: String, 
    }, 
    phone: {
        type: Number, 
        // require: true
    }, 
    created_date: {
        type: Date, 
        default: Date.now
    }, 

});
