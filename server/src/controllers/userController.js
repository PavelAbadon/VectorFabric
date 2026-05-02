import { Router } from "express";
import { userService } from "../services/index.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router();

//REGISTER
userController.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userService.register(email, password);

        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) });
    }    

});

//LOGIN
userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userService.login(email, password);
        res.status(201).json(result);

    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) });

    } 
})

//LOGOUT
userController.get('/logout', async (req, res) => {
    res.status(204).end();
})

// PROFILE
userController.get('/:id/details', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await userService.getOneById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) });
    }
});


export default userController;
