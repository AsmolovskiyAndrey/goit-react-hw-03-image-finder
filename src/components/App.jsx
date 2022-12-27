import { fetchImages } from 'api/ApiSearch';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';

export class App extends Component {
  state = {
    subject: [],
  };

  async componentDidMount() {
    try {
      const newSub = await fetchImages('nature', 1);
      this.setState({ subject: newSub });
      console.log(newSub);
    } catch {
      console.log('Что-то пошло не так');
    }
  }

  render() {
    return (
      <div className={css.App}>
        React homework template
        <Searchbar />
      </div>
    );
  }
}
