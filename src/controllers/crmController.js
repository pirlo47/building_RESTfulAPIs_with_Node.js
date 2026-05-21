//functions to define our endpoints 
import mongoose from "mongoose";
import { ContactSchema } from '../models/crmModel'; 

//create a contact variable to hold our model
const Contact = mongoose.model('Contact', ContactSchema); 

export const addNewContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body); 
        res.json(contact);
    } catch (err) {
        res.send(err)
    }
   //let newContact = new Contact(req.body) //use the body to create a new contact in the database
    //doesn,t work any longer
    // newContact.save(function (err, contact){
    //     if (err) {
    //         res.send(err);
    //     } 
    //     res.json(contact) 
    // }); 
}