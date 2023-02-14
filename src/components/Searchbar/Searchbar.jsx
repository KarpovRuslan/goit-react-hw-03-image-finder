import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.searchValue.trim() === '') {
      toast.error('Please enter valid search');
      return;
    }

    this.props.onSubmitSearch(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  handleChangeInput = evt => {
    this.setState({ searchValue: evt.target.value.toLowerCase() });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <BsSearch style={{ width: 22, height: 22 }} />
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            value={this.state.searchValue}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
