import React from "react";
import "./Main.css";
import UserForm from '../UserForm/UserForm';

const Main = ({form}) => {
    return (
        <main className="main" > 
            <UserForm />
        </main>
    );
}

export default Main;