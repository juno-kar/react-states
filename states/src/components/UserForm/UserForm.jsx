import React, { useState } from "react";
import "./UserForm.css";

function UserForm() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [groupCode, setGroupCode] = useState("");
    const [email, setEmail] = useState("");
    const [submData, setSubmData] = useState(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!name || !surname || !groupCode || !email) {
            alert("Будь ласка, перевірте, чи всі поля заповнені!");
            return;
        }
        
        setSubmData({ name, surname, groupCode, email });
    };

    return (
        <>
            <form className="user-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">- Your name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="field">
                    <label htmlFor="surname">- Your surname:</label>
                    <input type="text" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>

                <div className="field">
                    <label htmlFor="groupCode">- Group code:</label>
                    <input type="text" id="groupCode" value={groupCode} onChange={(e) => setGroupCode(e.target.value)} />
                </div>

                <div className="field">
                    <label htmlFor="email">- Your email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <button type="submit">Submit</button>
            </form>

            {submData && (
                <div className="subm-data">
                    <h2>You've submitted this data:</h2>
                    <p>Name: {submData.name}</p>
                    <p>Surname: {submData.surname}</p>
                    <p>Group code: {submData.groupCode}</p>
                    <p>Email: {submData.email}</p>
                </div>
            )}
        </>
    );
}

export default UserForm;
