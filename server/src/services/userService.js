import User from "../models/User.js"
import bcrypt from 'bcrypt';
import { generateAuthToken } from "../utils/tokenUtils.js";

//Register
export async function register (email, password, profilePicture){
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error('A user with this email already exists, their password is ******');
    }

    const user = await User.create({email, password, profilePicture});
    const token = generateAuthToken(user);

    return {
    _id: user._id,
    email: user.email, 
    profilePicture: user.profilePicture,
    accessToken: token, 
};
}

//Login
export async function login (email, password, profilePicture){
    const user = await User.findOne({ email });
    
    if (!user) {
        throw new Error('User does not exist');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new Error('The password is incorrect.');
    }

    const token = generateAuthToken(user);
    console.log(user);

    return {
    _id: user._id,
    email: user.email, 
    profilePicture: user.profilePicture,
    accessToken: token, 
};

}

//Profile - GetOneById
export async function getOneById(userId) {
    const user = await User.findById(userId);

    if (!user) {
        return null;
    }

    return {
        _id: user._id,
        email: user.email,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt
    };
}

//Profile - Edit
export async function editProfile(userId, data) {
    const user = await User.findByIdAndUpdate(
        userId,
        data,
        { new: true }
    );
    
    if (!user) {
        return null;
    }

    return {
        _id: user._id,
        email: user.email,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt
    };
}