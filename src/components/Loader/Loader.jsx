import { Component } from 'react';

class Loader extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    return <>{this.state.loading && <h1>Загружаем...</h1>}</>;
  }
}

export default Loader;
