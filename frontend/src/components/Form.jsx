import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../style/Form.css"

function Form({route, mehtod}){
    const [username, setUsername] = userState("")
    const [password, setPassword] = userState("")
    const [loading, setLoading] = userState(false)
    const navigate = useNavigate()
    const name = methed === "login" ? "Login" : "Register"

    const handleSubmit =  async (e) => {
        setLoading(true);
        e.preventDefault()

        try {
            const res = await api.post(route, {username, password})
            if(mehtod === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.access);
                navigate("/")
            } else{
                navigate("/")
            }
        }
        catch (error){
            alert(error)
        } finally{
            setLoading(false)
        }
    }
    return <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <input
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
        />
        <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
        />
        <button className="form-button" type="submit">
            {name}
        </button>
    </form>
}

export default Form