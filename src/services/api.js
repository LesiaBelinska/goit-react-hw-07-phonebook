import axios from "axios";

axios.defaults.baseURL = 'https://6289ff51e5e5a9ad321fc7ca.mockapi.io';

export const addContact = async (values) => {
    const response = await axios.post('/conacts', values);
    return response.data;
};

export const getContact = async () => {
    const response = await axios.get('/conacts');
    return response.data;
};

export const deleteContact = async (id) => {
    const response = await axios.delete(`/conacts/${id}`);
    return response.data;
};

export const updateContact = async (fields) => {
    const response = await axios.put(`/conacts/${fields.id}`, fields);
    return response.data;
};