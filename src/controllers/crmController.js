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

export const getContactWithID = async (req, res) => {
    try{
        const contact = await Contact.findById(req.params.contactId);
        res.json(contact);

        if(!contact) {
            res.json({message : "Contact not found"})
        }
    } catch(err){
        res.send(err)
    }
};

//creating the update contact function
export const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id:req.params.contactId }, 
            req.body,
            { new: true }
        ); 
        res.json(contact)
    } catch(err){
        res.send(err); 
    }
}; 