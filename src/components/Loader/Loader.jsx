import { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

class Loader extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <>
        {this.state.loading && (
          <div className={css.loader}>
            <InfinitySpin width="200" color="#3f51b5" />
          </div>
        )}
      </>
    );
  }
}

export default Loader;
