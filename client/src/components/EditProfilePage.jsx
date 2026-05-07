import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router";

export default function EditProfilePage() {
    const navigate = useNavigate();
    const { onEditProfile} = useContext(UserContext);

    const { user } = useContext(UserContext);
    const [file, setFile] = useState(user.profilePicture);

    const username = user?.email?.split('@')[0];

    const editProfileHandler = async (values) => {
            const userId = user._id;
        const { email, password, repeatPassword } = values;

        // Validation Password
        if (password !== repeatPassword) {
            return alert('Passwords do not match');
        }


        let profilePicture = values.profilePicture;
        
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'my_preset');

            const response = await fetch(
                'https://api.cloudinary.com/v1_1/dpxibptlf/image/upload',
                {
                    method: 'PUT',
                    body: formData
                }
            );

            const data = await response.json();

            profilePicture = data.secure_url;
        }

        
        try {
            const response = await fetch(`http://localhost:3030/users/${userId}/edit`, {
                method: 'PUT',
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

            onEditProfile(result);
            navigate(`/${result._id}/details`);

        } catch (error) {
            alert(error.message);
        }
    }


    const fileChangeHandler = (e) => {
        setFile(e.target.files[0]);
    };

    const { values, changeHandler, submitHandler } = useForm({
        password: '',
        repeatPassword: '',
        profilePicture: user?.profilePicture || '',
    }, editProfileHandler);

    return (
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

                    {/* USERNAME */}
                    <h3>{username}</h3>

                    {/* EMAIL */}
                    <p>{user?.email}</p>

                </div>

                {/* FORM */}
                <form
                    className="edit-profile-form"
                    onSubmit={submitHandler}
                >

                    {/* AVATAR URL */}
                    <input 
                        type="file" 
                        onChange={fileChangeHandler}
                    />

                    {/* NEW PASSWORD */}
                    <label>New Password</label>

                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        placeholder="Leave empty if not changing"
                        onChange={changeHandler}
                    />

                    {/* REPEAT PASSWORD */}
                    <label>Repeat Password</label>

                    <input
                        type="password"
                        name="repeatPassword"
                        value={values.repeatPassword}
                        onChange={changeHandler}
                    />

                    <div className="form-actions">

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Save
                        </button>

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate(`/${user._id}/details`)}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}