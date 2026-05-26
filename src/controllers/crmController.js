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
}; 

export const getContacts = async (req, res) => {
    try{
        const contact = await Contact.find({})
        res.json(contact)
    } catch(err){
        res.send(err)
    }
}; 