import React from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { MarvelAPI } from "../global/MarvelAPI";
import { DetailCard } from "../containers/DetailCard";

export const Detail = () => {
    const { id } = useParams();
    const chaID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data } = 
        MarvelAPI.useDetailQuery(chaID);
    const DetailData = data && data.data.results;

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };


    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section>
                    {DetailData!.map((detail) => (
                        <DetailCard 
                            key={detail.id} 
                            detail={detail} 
                        />
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};


