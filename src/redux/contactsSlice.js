import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6289ff51e5e5a9ad321fc7ca.mockapi.io',
    }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),
        getContactById: builder.query({
            query: (id) => `/contacts/${id}`,
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: (values) => ({
                url: '/contacts',
                method: 'POST',
                body: values,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        updateContact: builder.mutation({
            query: (fields) => ({
                url: `/contacts/${fields.id}`,
                method: 'PUT',
                body: fields,
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
})


export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
    useGetContactByIdQuery,
    useUpdateContactMutation,
} = contactsApi;