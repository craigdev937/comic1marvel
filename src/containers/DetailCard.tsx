import React from "react";
import "./DetailCard.css";
import { IChar } from "../models/Interfaces";

type DET = {
    detail: IChar
};

export const DetailCard = ({detail}: DET) => {
    return (
        <React.Fragment>
            <section 
                className="detail__card"
            >
                <aside className="detail__left">
                    <h3>{detail.name}</h3>
                    <p>{detail.description}</p>
                </aside>
                <aside className="detail__right">
                    <img 
                        className="detail__image"
                        alt={detail.name} 
                        src={`${detail.thumbnail.path
                            }.${detail.thumbnail.extension}`} 
                    />
                </aside>
            </section>
        </React.Fragment>
    );
};


