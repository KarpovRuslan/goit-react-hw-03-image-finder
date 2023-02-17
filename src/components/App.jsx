import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    searchValue: '',
  };

  onSubmit = searchValue => {
    this.setState({ searchValue: searchValue });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmitSearch={this.onSubmit} />
        <ToastContainer
          theme="dark"
          autoClose={2000}
          newestOnTop
          transition={Zoom}
        />
        <ImageGallery searchValue={this.state.searchValue} />
      </>
    );
  }
}
