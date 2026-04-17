import jwt from 'jsonwebtoken';

export const generateAuthToken = (user) =>{
    const payload = {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

    return token;

}