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
        style={{ display: "flex", flexWrap: "wrap" }}
        name="testform"
        method="get"
        action={`/book/${this.state.value}`}
        onSubmit={this.handleSubmit}
        required
      >
        <label>
          <input
            style={{
              width: 250,
              height: 30,
              borderRadius: 50,
              border: "1px solid #382110",
              marginLeft: 10,
              paddingLeft: 20,
              fontSize: 15
            }}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            required
            pattern=".{3,}"
            title="3 characters minimum"
            placeholder="Search books"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          style={{
            width: 90,
            height: 35,
            border: "1px solid #382110",
            borderRadius: 50,
            marginLeft: 10,
            fontSize: 15,
            backgroundColor: "#382110",
            color: "#fff",
            cursor: "pointer"
          }}
        />
      </form>
    );
  }
}

//export default withRouter(SearchBox); for front-end routing if the Goodreads API can bee accessd from front end
