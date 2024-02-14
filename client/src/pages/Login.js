import { useState } from "react";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();

        try {
            const loginData = { name, password };
            const response = await fetch("http://localhost:4000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();
            console.log("login - ", data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h2>Register a new account</h2>
            <form onSubmit={login}>
                <input type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
                <br/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
