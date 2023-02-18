import { Button } from 'components/Button/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import ImagesApi from '../../services/ImagesApi';
import css from './ImageGallery.module.css';

const newImagesApi = new ImagesApi();

class ImageGallery extends Component {
  state = {
    loading: false,
    status: 'idle',
    currentImage: '',
    showModal: false,
    totalPages: null,
    imgArray: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ status: 'pending' });
      newImagesApi.resetPage();
      newImagesApi.query = this.props.searchValue;
      newImagesApi
        .searchImages()
        .then(data => {
          if (data.hits.length > 0) {
            this.setState({
              imgArray: data.hits,
              page: newImagesApi.pages,
              status: 'success',
              totalPages: Math.ceil(data.totalHits / 12),
            });
          } else {
            this.setState({ status: 'error' });
          }
        })
        .catch(error => this.setState({ status: 'error' }));
    }
  }

  showPicture = img => {
    this.setState({
      currentImage: img,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  loadMore = () => {
    newImagesApi.pages = 1;
    newImagesApi.searchImages().then(data => {
      this.setState(prev => ({
        imgArray: [...prev.imgArray, ...data.hits],
        page: newImagesApi.pages,
      }));
    });

    setTimeout(
      () =>
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        }),
      300
    );
  };

  render() {
    const { status, imgArray, showModal, currentImage, totalPages, page } =
      this.state;

    if (status === 'idle') {
      return (
        <div className={css.imageGallery__textContent}>
          Please enter search Value to find smth..
        </div>
      );
    }

    if (status === 'pending') {
      return <Loader timeout={2000} />;
    }

    if (status === 'success') {
      return (
        <>
          <ul className={css.imageGallery}>
            <ImageGalleryItem image={imgArray} showPicture={this.showPicture} />
          </ul>
          {page < totalPages && <Button onClick={this.loadMore} />}
          {showModal && (
            <Modal onClose={this.toggleModal} currentImage={currentImage} />
          )}
        </>
      );
    }
    if (status === 'error') {
      return (
        <p className={css.imageGallery__textContent}>
          Ooops! Something went wrong
        </p>
      );
    }
  }
}

export default ImageGallery;
