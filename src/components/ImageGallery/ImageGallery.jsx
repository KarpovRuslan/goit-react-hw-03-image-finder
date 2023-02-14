import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    searchValue: '',
    loading: false,
    data: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchValue}&page=1&key=32152972-b0c98a7cb53bef05c50b77987&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    console.log(this.state.data);
    return (
      <ul className="imageGallery">
        {!this.props.searchValue && (
          <div>Please enter search Value to find smth..</div>
        )}
        {this.props.searchValue && (
          <ImageGalleryItem
          // key={id}
          // id={id}
          // webformatURL={webformatURL}
          // largeImageURL={largeImageURL}
          // tags={tags}
          // showPicture={showPicture}
          />
        )}
      </ul>
    );
  }
}

export default ImageGallery;
