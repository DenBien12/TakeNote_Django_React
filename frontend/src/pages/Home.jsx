import { useState, useEffect } from "react"
import api from "../api"
import { data } from "@remix-run/router/dist/utils";


function Home(){
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    useEffect(()=> {
        geetNotes();
    }, [])
    const getNote = () => {
        api.
        get("/api/notes/")
        .then((res) => res.data)
        .then((data) => {setNotes(data); console.log(data)})
        .catch((err) =>alert(err));
    }

    return <div>Home</div>
}

export default Home