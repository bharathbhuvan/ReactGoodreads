import React, { Component } from "react";

class Grid extends Component {
  constructor(props) {
    super(props);

    let repos;
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      repos = this.props.staticContext.data;
    }

    this.state = {
      repos,
      loading: repos ? false : true
    };
    this.fetchRepos = this.fetchRepos.bind(this);
  }
  componentDidMount() {
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id);
    }
  }
  fetchRepos(title) {
    this.setState(() => ({
      loading: true
    }));

    this.props.fetchInitialData(title).then(repos =>
      this.setState(() => ({
        repos,
        loading: false
      }))
    );
  }
  render() {
    const { loading, repos } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

    return (
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {repos.map(({ imageUrl, bookId, bookUrl, title }) => (
          <li key={bookId} style={{ margin: 30 }}>
            <a href={`https://www.goodreads.com${bookUrl}`}>{title}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Grid;
