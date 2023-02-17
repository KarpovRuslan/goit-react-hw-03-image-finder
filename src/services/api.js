// async function fetchImage(searchValue) {
//   return await fetch(
//     `https://pixabay.com/api/?q=${searchValue}&page=1&key=32152972-b0c98a7cb53bef05c50b77987&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(
//       new Error(`Nothing found with search ${searchValue}`)
//     );
//   });
// }

// const api = { fetchImage };

// export default api;

// import axios from 'axios';

// export default class ImagesApiService {
//   instance = axios.create({
//     baseURL: 'https://pixabay.com/api/',

//     params: {
//       per_page: 12,
//       key: '32152972-b0c98a7cb53bef05c50b77987',
//       image_type: 'photo',
//       orientation: 'horizontal',
//     },
//   });

//   searchImages = async (searchValue, page = 1) => {
//     const { data } = await axios.get('?&', { params: { searchValue, page } });
//     return data.hits;
//   };
// }

import axios from 'axios';

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.baseURL = 'https://pixabay.com/api/';
    this.key = '32152972-b0c98a7cb53bef05c50b77987';
    this.per_page = 12;
  }

  resetPage() {
    this.page = 1;
  }
  get pages() {
    return this.page;
  }
  set pages(value) {
    this.page += value;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  searchImages() {
    const url = `${this.baseURL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.per_page}&key=${this.key}`;
    return axios.get(url).then(result => result.data);
  }
}
