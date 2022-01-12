import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../types/Interfaces";

type Props = {
    player: IPlayer
};

export const Item = ({ player }: Props): JSX.Element => {
    return (
        <React.Fragment>
            <h2><Link 
                to={`/players/edit/${player.id}`}
                >{player.title}
                </Link>
            </h2>
            <main key={player.id}>
                <p>{player.first} {player.last}</p>
                <p>Age: {player.age}</p>
                <p>Info: {player.info}</p>
            </main>
        </React.Fragment>
    );
};



