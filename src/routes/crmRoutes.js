import { addNewContact, deleteContact, getContacts, getContactWithID, updateContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        //middleware 
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Resquest type: ${req.method}`);
        next();
    }, getContacts)
    //parse controller functioin into the post method
    .post(addNewContact)

    
    app.route('/contact/:contactId')
    //get contact with ID
    .get(getContactWithID)

    //Update Route
    .put(updateContact)
    
    //to delete contact
    .delete(deleteContact); 
}; 

export default routes; 