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
                <div className="detail__title">
                    <h3>{detail.name}</h3>
                </div>
                <p>{detail.description}</p>
                <img 
                    className="detail__image"
                    alt={detail.name} 
                    src={`${detail.thumbnail.path
                        }.${detail.thumbnail.extension}`} 
                />
            </section>
        </React.Fragment>
    );
};


