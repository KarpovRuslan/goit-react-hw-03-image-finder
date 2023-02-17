import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import './../styles/styles.css';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchValue: '',
  };

  onSubmit = searchValue => {
    this.setState({ searchValue: searchValue });
  };

  onScrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmitSearch={this.onSubmit} />
        <ToastContainer
          theme="dark"
          autoClose={2000}
          newestOnTop
          transition={Zoom}
        />
        <ImageGallery
          searchValue={this.state.searchValue}
          onScrollPage={this.onScrollPage}
        />
      </>
    );
  }
}
