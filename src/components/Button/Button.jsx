import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  state = {};
  render() {
    return (
      <div className={css.block}>
        <button type="button" className={css.button}>
          Load More
        </button>
      </div>
    );
  }
}

export default Button;
