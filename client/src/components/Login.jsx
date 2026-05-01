export default function Login (){

    return (
        <div className="container">
            <div className="form-container">
                <h2>Login</h2>
                <input type="email" id="email" value={'example@email.com'}  placeholder="Email"/>
                <input type="password" id="password" value={'password'}  placeholder="Password"/>
                <button>Login</button>
            </div>
        </div>
    )
}