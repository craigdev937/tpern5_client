import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";

export const Add = (): JSX.Element => {
    const navigate = useNavigate();
    const [addPlayer] = PlayerAPI.useCreateMutation();
    const [player, setPlayer] = React.useState({
        title: "", first: "", last: "", 
        age: 0, info: ""
    });

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit =
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await addPlayer({
            title: "", first: "", last: "", 
            age: 0, info: ""
        });
        navigate("/");
    };

    return (
        <React.Fragment>
            <h1>Create a new Player!</h1>
            <form onSubmit={handleSubmit}>
                <aside>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Title"
                        value={player.title}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="first">First</label>
                    <input 
                        type="text" 
                        name="first"
                        placeholder="First Name"
                        value={player.first}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="last">Last</label>
                    <input 
                        type="text" 
                        name="last"
                        placeholder="Last Name"
                        value={player.last}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age"
                        placeholder="Age"
                        value={player.age}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="info">Info</label>
                    <input 
                        type="text" 
                        name="info"
                        placeholder="Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <button><Link to="/">Cancel</Link></button>
                    <button type="submit">Add Player</button>
                </aside>
            </form>
        </React.Fragment>
    );
};



