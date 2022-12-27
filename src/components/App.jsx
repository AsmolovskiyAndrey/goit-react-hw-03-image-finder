import { fetchImages } from 'api/ApiSearch';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    subject: [],
    page: 1,
    search: '',
    loading: false,
    notFound: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    try {
      if (prevState.search !== search || prevState.page !== page) {
        this.setState({ loading: true });

        const newSub = await fetchImages(search, page);
        this.setState({ subject: newSub });
        console.log(newSub.length);

        this.setState({ loading: false });

        if (newSub.length === 0) {
          this.setState({ notFound: true });
        }
      }
    } catch {
      this.setState({ error: true });
    }
  }

  searchSubject = event => {
    const normaliseValue = event.toLowerCase().trim();
    this.setState({ search: normaliseValue });
    this.setState({ notFound: false });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.searchSubject} />
        {this.state.loading && <h2>Loading...</h2>}
        {this.state.notFound && <h2>Nothing found for your search...</h2>}
        {this.state.error && (
          <h2>Something went wrong, try reloading the page</h2>
        )}
        {this.state.subject && (
          <ImageGallery galleryItems={this.state.subject} />
        )}
      </div>
    );
  }
}
