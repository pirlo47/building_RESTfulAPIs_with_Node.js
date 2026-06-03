import { addNewContact, deleteContact, getContacts, getContactWithID, updateContact } from "../controllers/crmController";
import { login, loginRequired, register } from "../controllers/userControllers";
const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        //middleware 
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Resquest type: ${req.method}`);
        next();
    }, getContacts)
    //parse controller functioin into the post method
    .post(loginRequired, addNewContact)

    app.route('/contact/:contactId')
    //get contact with ID
    .get(loginRequired, getContactWithID)

    //Update Route
    .put(loginRequired, updateContact)
    
    //to delete contact
    .delete(loginRequired, deleteContact); 

    //registration route 
    app.route('/auth/register').post(register); 

    //login route
    app.route('/login').post(login); 
}; 

export default routes; 