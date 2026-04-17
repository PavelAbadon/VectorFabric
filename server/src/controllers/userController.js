import { Router } from "express";
import { userService } from "../services/index.js";

const userController = Router();

//REGISTER
userController.post('/register', async (req, res) => {
    const { email, password } = req.body;

    //try {
      //  const result = await userService.register(email, password);

        //res.status(201).json(result);
    //} catch (err) {
        //res.status(400).json({ message: getErrorMessage(err) });
    //}

     const result = await userService.register(email, password);

        res.status(201).json(result);

});

export default userController;
