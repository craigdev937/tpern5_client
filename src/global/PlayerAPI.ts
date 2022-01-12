import { IPlayer } from "../types/Interfaces";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://tpern5crud.herokuapp.com/api";
export const PlayerAPI = createApi({
    reducerPath: "PlayerAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Players"],
    endpoints: (builder) => ({
        fetchAll: builder.query<IPlayer[], void>({
            query: () => "/",
        }),
        create: builder.mutation<IPlayer, IPlayer>({
            query: (player) => {
                return {
                    url: `/`,
                    method: "POST",
                    body: player
                }
            },
            invalidatesTags: [{ type: "Players", id: "LIST" }],
        }),
    }),
});





