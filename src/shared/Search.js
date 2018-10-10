import React, { Component } from "react";

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
    else alert("please enter valid title");
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
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
