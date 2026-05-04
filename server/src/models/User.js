import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema ({
    email: {
        type: String,
        required: [true, 'User email is required!'],
        unique: true, 
        
    },
    password: {
        type: String,
        required: [true, 'User password is required!'],
        minLength: [6, 'Password too short']
    },
    profilePicture: {
    type: String,
    trim: true,
    validate: {
        validator: function (value) {
            return /^https?:\/\/.+/.test(value);
        },
        message: 'Profile picture must be a valid URL!'
    }
}
    
});

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = model('User', userSchema);

export default User;