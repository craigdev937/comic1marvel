import React from "react";
import "./MarvelCard.css";
import { IChar } from "../models/Interfaces";

type CHA = {
    char: IChar
};

export const MarvelCard = ({char}: CHA) => {
    return (
        <React.Fragment>
            <section className="card">
                <img 
                    alt={char.name} 
                    src={`${char.thumbnail.path
                        }.${char.thumbnail.extension}`} 
                />
                <div className="title">
                    <h3>{char.name}</h3>
                </div>
            </section>
        </React.Fragment>
    );
};


