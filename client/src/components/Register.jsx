import { useNavigate } from "react-router";
import useForm from "../hooks/useForm";

export default function Register (){
    const navigate = useNavigate();

    const registerHandler = async() => {
        const { email, password, repeatPassword } = values;

        // Validation password
        if (password !== repeatPassword) {
            return alert('Passwords do not match');
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
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            //onRegister(data);

            navigate('/');

        } catch (error) {
            alert(error.message);
        }

       
    }


    const {values, changeHandler, submitHandler} = useForm({
        email: '',
        password: '',
        repeatPassword: '',
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
                <button>Register</button>
            </div>
            </form>
        </div>

    )
}