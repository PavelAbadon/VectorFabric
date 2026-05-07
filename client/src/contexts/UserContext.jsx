import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();

    // Инициализация на user от localStorage
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('auth');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    

    // Логика за login
    const onLogin = (userData) => {
        setUser(userData); // записва в state
        localStorage.setItem('auth', JSON.stringify(userData)); // записва в localStorage
        
    };

    // Логика за register
    const onRegister = (userData) => {
        setUser(userData); // записва в state
        localStorage.setItem('auth', JSON.stringify(userData)); // записва в localStorage
        
    };

    //Логика за editProfile
    const onEditProfile = (userData) => {
        setUser(userData); // записва в state
        localStorage.setItem('auth', JSON.stringify(userData)); // записва в localStorage
        
    };

    // Логика за logout
    const onLogout = () => {
        setUser(null); // чисти state
        localStorage.removeItem('auth'); // чисти localStorage
        navigate('/'); // пренасочва на home
    };

    // Допълнителни стойности
    const isAuthenticated = !!user;
    
    return (
        <UserContext.Provider value={{
            user,
            onLogin,
            onLogout,
            onRegister,
            onEditProfile,
            isAuthenticated,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;