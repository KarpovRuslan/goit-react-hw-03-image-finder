import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

// const ImageGalleryItem = ({ imgArray, showPicture }) => {
//   return imgArray.map(({ webformatURL, tags, id, largeImageURL }) => (

//   ));
// };

// export default ImageGalleryItem;

export default class ImageGalleryItem extends Component {
  render() {
    return this.props.image.map(({ webformatURL, tags, id, largeImageURL }) => (
      <li
        className={css.imageGalleryItem}
        key={id}
        onClick={() =>
          this.props.showPicture({ alt: tags, src: largeImageURL })
        }
      >
        <img
          src={webformatURL}
          alt={tags}
          className={css.imageGalleryItemImage}
        />
      </li>
    ));
  }
}
