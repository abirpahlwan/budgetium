import { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const register = async (e) => {
        e.preventDefault();

        try {
            const registerData = { name, email, password, passwordVerify };
            const response = await fetch("http://localhost:4000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerData)
            });

            const data = await response.json();
            console.log("register - ", data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h2>Register a new account</h2>
            <form onSubmit={register}>
                <input type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
                <br/>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <br/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <br/>
                <input type="password" placeholder="Verify your password" onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify}/>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;
