import axios from 'axios';

const api = axios.create({
  method: 'POST',
  baseURL: '/upload',
  params: {
    key: process.env.REACT_APP_KEY || 'ewrp4o¡4X%4o5¡4c5oq04ot5yy86hu658hxj8gjturhpgpañgfçggcxi59hjgxtuh',
  },
});


const imageUpload = async (file) => {
  const { data } = await api('image', {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: { imagen: file }
  });
  return data;
};

export const deleteImage = async (id) => {
  const { data } = await api.delete('delete', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: { id: id }
  });
  return data;
};

export default imageUpload;