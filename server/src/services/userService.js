import User from "../models/User.js"
import bcrypt from 'bcrypt';
import { generateAuthToken } from "../utils/tokenUtils.js";

//Register
export async function register (email, password){
    const user = await User.create({email, password});
    const token = generateAuthToken(user);

    return {
        _id: user.id,
        email: user.email, 
        accessToken: token, 
    };
}

//Login
export async function login (email, password){
    const user = await User.findOne({ email });
    
    if (!user) {
        throw new Error('User does not exist');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new Error('The password is incorrect.');
    }

    const token = generateAuthToken(user);

    return {
        _id: user.id,
        email: user.email, 
        accessToken: token, 
    };

}