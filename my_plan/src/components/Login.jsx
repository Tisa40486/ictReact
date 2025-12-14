import "bulma/css/bulma.min.css";
import { useState } from "react";
import PropTypes from "prop-types";

function Login({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const savedToken = sessionStorage.getItem("token");
    if (savedToken) {
        setToken(savedToken);
        console.log("Token saved =>", savedToken);
    }

    const handleLogin = () => {
        if (!email) {
            alert("Utilisateur non renseigné");
            return;
        }
        if (!password) {
            alert("Mot de passe non renseigné");
            return;
        }
        loginData();
    };

    const handleToken = (token) => {
        sessionStorage.setItem("token", token);
        setToken(token);
        console.log("Token =>", token);
    };

    async function loginData() {
        try {
            const response = await fetch('http://193.108.54.49:8080/utgCheckLogin', {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ username: email, password })
            });

            const data = await response.json();
            console.log(data);

            if (data.strErrorInfo) {
                alert(data.strErrorInfo);
                return;
            }

            handleToken(data.num_personne);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <h1 style={{ fontSize: 75 }}>Login</h1>
            <div className="field">
                <label className="label">Utilisateur</label>
                <div className="control has-icons-left">
                    <input
                        className="input"
                        type="text"
                        placeholder="Utilisateur"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="icon is-left"><i className="fa-solid fa-user"></i></span>
                </div>
            </div>

            <div className="field">
                <label className="label">Mot de passe</label>
                <div className="control has-icons-left">
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="icon is-left"><i className="fa-solid fa-lock"></i></span>
                </div>
            </div>

            <button className="button is-link" onClick={handleLogin}>
                Login
            </button>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;