import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import useForm from "../hooks/useForm";


export default function EditProfilePage(){
    const { user } = useContext(UserContext);
    const username = user?.email?.split('@')[0];
    

    const editProfileHandler = async (values) => {
    const { password, repeatPassword } = values;

    if (password !== repeatPassword) {
        return alert('Passwords do not match');
    }

    console.log(values);
};
    


    const { values, changeHandler, submitHandler } = useForm({
    email: user?.email || '',
    password: '',
    repeatPassword: '',
    profilePicture: user?.profilePicture || '', 
}, editProfileHandler);

    

    return(
        <>
        <div className="container edit-profile-page">

            <div className="form-container">

                <h2>Edit Profile</h2>

                {/* AVATAR PREVIEW */}
                <div className="avatar-section">
                <img 
                    className="avatar-preview"
                    src={values.profilePicture}
                    alt="avatar"
                />

                <input type="file" />
                </div>

                {/*    FORM */}
                <form className="edit-profile-form" onSubmit={submitHandler}>

                <label>Username</label>
                <input type="text" value={username} name="username" onChange={changeHandler} />

                <label>Email</label>
                <input type="email" value={values.email} name="email" onChange={changeHandler}/>

                <label>Avatar URL</label>
                <input type="text" value={values.profilePicture} placeholder="https://..." name="profilePricture" onChange={changeHandler}/>

                <label>New Password</label>
                <input type="password" placeholder="Leave empty if not changing" name="password" onChange={changeHandler} />

                <label>Repeat Password</label>
                <input type="password" name="repeatPassword" onChange={changeHandler}/>

                <div className="form-actions">
                    <button type="submit" className="save-btn">Save</button>
                    <button type="button" className="cancel-btn">Cancel</button>
                </div>

                </form>

            </div>

            </div>
        </>
    )    
    
    }