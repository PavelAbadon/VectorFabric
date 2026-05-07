import { Router } from "express";
import userController from "./controllers/userController.js";
import vectorController from "./controllers/vectorController.js";


const routes = Router();

routes.use('/users', userController);
routes.use('/vectors', vectorController);


export default routes;