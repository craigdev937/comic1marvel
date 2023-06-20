import React from "react";
import { MarvelAPI } from "../global/MarvelAPI";
import { MarvelCard } from "../containers/MarvelCard";

export const Marvel = () => {
    const { error, isLoading, data } = 
        MarvelAPI.useCharQuery();
        const CharData = data && data.data.results;
        console.log(data!);

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
                <section className="marvel__container">
                    {CharData!.map((char) => (
                        <MarvelCard 
                            key={char.id} 
                            char={char} 
                        />
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};


