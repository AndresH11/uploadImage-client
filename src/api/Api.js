import axios from 'axios';

const api = axios.create({
  method: 'POST',
  baseURL: 'https://festive-efficacious-santanaraptor.glitch.me',
  params: {
    key: process.env.REACT_APP_KEY,
  },
});


const imageUpload = async (file) => {
  const { data } = await api('upload/image', {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: { imagen: file }
  });
  
  return data;
};

export const deleteImage = async (id) => {
  const { data } = await api.delete('upload/delete', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: { id: id }
  });
  return data;
};

export default imageUpload;
