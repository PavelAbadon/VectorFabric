import { useNavigate } from "react-router";
import useForm from "../hooks/useForm";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Register (){
    const navigate = useNavigate();
    const {onRegister} = useContext(UserContext);

    const registerHandler = async(values) => {
        const { email, password, repeatPassword, profilePicture  } = values;        

        // Validation password
        if (password !== repeatPassword) {
            return alert('Passwords do not match');
        }

        //Validation ProfilePicture URL
        if (profilePicture && !/^https?:\/\/.+/.test(profilePicture)) {
            return alert('Profile picture must be a valid URL');
        }

        try {
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    profilePicture,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            onRegister(result);
            navigate(`/${result._id}/details`);

        } catch (error) {
            alert(error.message);
        }       
    }

    const {values, changeHandler, submitHandler} = useForm({
        email: '',
        password: '',
        repeatPassword: '',
        profilePicture: '',
    },
    registerHandler
    );

    return(
        <div className="container">
            <form onSubmit={submitHandler}>
            <div className="form-container">
                <h2>Register</h2>
                <input type="email" name="email" value={values.email} onChange={changeHandler} placeholder="Email"/>
                <input type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password"/>
                <input type="password" name="repeatPassword" value={values.repeatPassword} onChange={changeHandler} placeholder="Repeat Password"/>
                <input type="text" name="profilePicture" value={values.profilePicture} onChange={changeHandler} placeholder="Profile Picture"/>
                <button>Register</button>
            </div>
            </form>
        </div>

    )
}