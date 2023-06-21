import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacters, IDetail, IFind } from "../models/Interfaces";
const apiKEY = process.env.API_KEY;
const hashKEY = process.env.HASH_KEY;
const URL = "https://gateway.marvel.com:443/v1/public";

export const MarvelAPI = createApi({
    reducerPath: "MarvelAPI",
    tagTypes: ["Character", "Comics"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        char: builder.query<ICharacters, void>({
            query: () => ({
                url: `/characters?ts=1&apikey=${
                    apiKEY}&hash=${hashKEY}`,
                method: "GET"
            }),
            providesTags: ["Character"]
        }),
        detail: builder.query<IDetail, number>({
            query: (id: number) => ({
                url: `/characters/${id}?ts=1&apikey=${
                    apiKEY}&hash=${hashKEY}`,
                method: "GET"
            }),
            providesTags: ["Character"]
        }),
    }),
});




