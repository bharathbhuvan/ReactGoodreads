import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value && this.state.value.length > 2) testform.submit();
    //this.props.history.push('/book/${this.state.value}'); for front-end routing if the Goodreads API can bee accessd from front end
  }
  render() {
    return (
      <form
        name="testform"
        action={`/book/${this.state.value}`}
        onSubmit={this.handleSubmit}
        required
      >
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            required
            pattern=".{3,}"
            title="3 characters minimum"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//export default withRouter(SearchBox); for front-end routing if the Goodreads API can bee accessd from front end
