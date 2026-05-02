import { useNavigate } from "react-router";
import useForm from "../hooks/useForm";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Login (){
    const navigate = useNavigate();
    const {onLogin} = useContext(UserContext);

    const loginHandler =  async (values) =>{
        const {email, password} = values;

        const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            
        const result = await response.json();
        console.log(result);
        if (!response.ok) {
            throw new Error(result.message);
        }
                
        onLogin(result);
        navigate('/');
    }


    const {values, changeHandler, submitHandler} = useForm({
        email: '',
        password: ''
    },
    loginHandler
    );

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
            <div className="form-container">
                <h2>Login</h2>
                <input type="email" name="email" value={values.email} onChange={changeHandler} placeholder="Email"/>
                <input type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password"/>
                <button>Login</button>
            </div>
            </form>
        </div>
    )
}