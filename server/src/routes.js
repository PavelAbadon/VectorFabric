import { Router } from "express";


const routes = Router();

routes.use('/users', userController);


export default routes;