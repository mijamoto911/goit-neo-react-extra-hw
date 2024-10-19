import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://671261456c5f5ced6623487a.mockapi.io',
});

export const getContactsApi = async () => {
  const { data } = await instance('/contacts');
  return data;
};

export const removeContactsApi = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const createContactsApi = async (payload) => {
  const { data } = await instance.post('/contacts', payload);
  return data;
};
