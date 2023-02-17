// import { Component } from 'react';
// import ImagesApiService from 'services/api';
// import css from './Button.module.css';

// const newImagesApiService = new ImagesApiService();

// class Button extends Component {
//   state = {
//     imgArray: [],
//     page: 1,
//   };

//   onScrollPage() {
//     window.scrollTo({
//       top: document.documentElement.offsetHeight,
//       behavior: 'smooth',
//     });
//   }

//   handleClick = () => {
//     newImagesApiService.pages = 1;
//     newImagesApiService
//       .searchImages()
//       .then(data => {
//         this.setState(prev => ({
//           imgArray: [...prev.imgArray, ...data.hits],
//           page: newImagesApiService.pages,
//         }));
//         this.onScrollPage();
//       })
//       .catch(err => {
//         this.setState({ status: 'error' });
//       });
//   };

//   onClick() {
//     console.log('hello');
//     console.log(this.props);
//   }

//   render() {
//     return (
//       <div className={css.block}>
//         <button type="button" className={css.button} onClick={this.onClick}>
//           Load More
//         </button>
//       </div>
//     );
//   }
// }

// export default Button;

import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={css.block}>
      <button type="button" className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
