import { addNewContact, getContacts, getContactWithID } from "../controllers/crmController";

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
    .put((req, res) => {
        res.send('PUT request sucessful!');
    })

    //get contact with ID
    .get(getContactWithID)
    
    .delete((req, res) => {
        res.send('DELETE request sucessful!');
    })
}; 

export default routes; 