import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',

  params: {
    per_page: 12,
    key: '32152972-b0c98a7cb53bef05c50b77987',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchImages = async (q, page = 1) => {
  const { data } = await instance.get('?&', { params: { q, page } });
  return data.hits;
};
