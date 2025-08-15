import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [numberChanged, setNumberChanged] = useState(false);
    const [characterChanged, setCharacterChanged] = useState(false);

    function generatePassword() {
        let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numberChanged) 
            characters += "0123456789";
        if (characterChanged) 
            characters += "!@#$%^&*()_+[]{}|;:,.<>?";

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters[randomIndex];
        }
        setPassword(newPassword);
    }

    useEffect(() => {
        generatePassword();
    }, [length, numberChanged, characterChanged]);

    return (
        <>
            <h2>Password Generator</h2>
            <h1>{password}</h1>
            <div className="container">
                <input 
                    type="range" 
                    min={5} 
                    max={20} 
                    value={length} 
                    onChange={(e) => setLength(Number(e.target.value))}
                />
                <label>Length ({length})</label>

                <input 
                    type="checkbox" 
                    checked={numberChanged} 
                    onChange={() => setNumberChanged(!numberChanged)} 
                />
                <label>Number</label>

                <input 
                    type="checkbox" 
                    checked={characterChanged} 
                    onChange={() => setCharacterChanged(!characterChanged)} 
                />
                <label>Character</label>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator />);
