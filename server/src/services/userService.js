import User from "../models/User.js"

export async function register (email, password){
    const user = await User.create({email, password});

    return {
        _id: user.id,
        email: user.email, 
    };
}