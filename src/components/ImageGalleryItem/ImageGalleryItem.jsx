import { Component } from 'react';
import axios from 'axios';
import css from './ImageGalleryItem.module.css';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=32152972-b0c98a7cb53bef05c50b77987&image_type=photo&orientation=horizontal&per_page=12';

class ImageGalleryItem extends Component {
  state = { images: [], loading: false };

  async componentDidMount() {
    const response = await axios.get(axios.defaults.baseURL);
    this.setState({ images: response.data.hits });
  }
  render() {
    const { images } = this.state;

    return images.map(({ id, webformatURL, tags }) => (
      <li className={css.imageGalleryItem} key={id}>
        <img
          src={webformatURL}
          alt={tags}
          className={css.imageGalleryItemImage}
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
