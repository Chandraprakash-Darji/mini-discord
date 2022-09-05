import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { cookies } from '../components/App';
import { InfoIn, LoginRes, ServerChannelsIn } from '../types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const DcMini = createApi({
    reducerPath: 'DcMini',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            const token = cookies.get('TOKEN');

            //* If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),

    endpoints: (builder) => ({
        //* get the Servers
        getServers: builder.query<InfoIn, void>({
            query: () => `${BASE_URL}/serverList`,
            transformResponse: (rawResult: { data: InfoIn }) => {
                return rawResult.data;
            },
        }),
        //* get the Server
        getServer: builder.query<ServerChannelsIn, string>({
            query: (serverId) => `${BASE_URL}/serverList/${serverId}`,
            transformResponse: (rawResult: { data: ServerChannelsIn }) => {
                return rawResult.data;
            },
        }),
    }),
});

export const { useGetServersQuery, useGetServerQuery } = DcMini;
