import React from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { MarvelAPI } from "../global/MarvelAPI";

export const Detail = () => {
    const { id } = useParams();
    const chaID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data } = 
        MarvelAPI.useDetailQuery(chaID);

    const DetailData = data && data.data.results;

    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section>
                    {DetailData!.map((detail) => (
                        <section key={detail.id}>
                            <h1>{detail.name}</h1>
                            <p>{detail.description}</p>
                        </section>
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};


