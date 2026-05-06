import { useNavigate } from "react-router";
import useForm from "../hooks/useForm";
import { useContext, useState } from "react"; 
import UserContext from "../contexts/UserContext";

export default function Register (){

    const navigate = useNavigate();
    const { onRegister } = useContext(UserContext);

    const [file, setFile] = useState(null);

    const registerHandler = async (values) => {

        const { email, password, repeatPassword } = values;

        // Validation Password
        if (password !== repeatPassword) {
            return alert('Passwords do not match');
        }


        let profilePicture = '';
        
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'my_preset');

            const response = await fetch(
                'https://api.cloudinary.com/v1_1/dpxibptlf/image/upload',
                {
                    method: 'POST',
                    body: formData
                }
            );

            const data = await response.json();

            profilePicture = data.secure_url;
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

    const fileChangeHandler = (e) => {
        setFile(e.target.files[0]);
    };

    const { values, changeHandler, submitHandler } = useForm({
        email: '',
        password: '',
        repeatPassword: '',
        profilePicture: '', 
    }, registerHandler);

    return(
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="form-container">

                    <h2>Register</h2>

                    <input 
                        type="email" 
                        name="email" 
                        value={values.email} 
                        onChange={changeHandler} 
                        placeholder="Email"
                    />

                    <input 
                        type="password" 
                        name="password" 
                        value={values.password} 
                        onChange={changeHandler} 
                        placeholder="Password"
                    />

                    <input 
                        type="password" 
                        name="repeatPassword" 
                        value={values.repeatPassword} 
                        onChange={changeHandler} 
                        placeholder="Repeat Password"
                    />
                    
                    <input 
                        type="file" 
                        onChange={fileChangeHandler}
                    />

                    <button>Register</button>

                </div>
            </form>
        </div>
    )
}