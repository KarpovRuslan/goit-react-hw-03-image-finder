import React, { Component } from 'react';
import Modal from './Modal';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Loader from './Loader';
import Button from './Button/Button';
import './../styles/styles.css';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    showModal: false,
    searchValue: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onSubmit = searchValue => {
    this.setState({ searchValue });
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
        <Searchbar onSubmitSearch={this.onSubmit} />
        <ToastContainer
          theme="dark"
          autoClose={2000}
          newestOnTop
          transition={Zoom}
        />
        {/* <button type="button" onClick={this.toggleModal}>
          Откріть модалку
        </button> */}
        {/* <Loader /> */}
        <ImageGallery searchValue={this.state.searchValue} />
        <Button />
        {showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}

// const KEY = '32152972-b0c98a7cb53bef05c50b77987';
// const BASE_URL = `https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
