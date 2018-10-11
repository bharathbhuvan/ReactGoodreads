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
      <div style={{ display: "block" }}>
        {repos.map(
          ({ imageUrl, bookId, bookUrl, title, author, avgRating }) => (
            <div key={bookId} style={{ margin: 30, display: "table" }}>
              <a
                href={`https://www.goodreads.com${bookUrl}`}
                target="_blank"
                title={title}
              >
                <img src={imageUrl} title={title} />
              </a>
              <span
                style={{
                  display: "table-cell",
                  verticalAlign: "middle",
                  paddingLeft: 10
                }}
              >
                <a
                  href={`https://www.goodreads.com${bookUrl}`}
                  style={{ color: "#333333", textDecoration: "none" }}
                  target="_blank"
                  title={title}
                >
                  {title}
                </a>
                <span style={{ fontStyle: "italic", display: "block" }}>
                  {author.name}
                </span>
                <span style={{ color: "#999", fontSize: 10 }}>
                  {avgRating} avg rating
                </span>
              </span>
            </div>
          )
        )}
      </div>
    );
  }
}

export default Grid;
