import { addNewContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        //middleware 
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Resquest type: ${req.method}`);
        next();
        
    }, (req, res, next) => {
        res.send('GET request sucessful!');
    })

    //parse controller functioin into the post method
    .post(addNewContact); 

    app.route('/contact/:contactId')
    .put((req, res) => {
        res.send('PUT request sucessful!');
    }) 
    
    .delete((req, res) => {
        res.send('DELETE request sucessful!');
    })
}; 

export default routes; 