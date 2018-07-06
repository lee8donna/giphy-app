import React, { Component } from "react";

class SearchForm extends Component {
  state = { value: "" };
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSearchTermSubmit(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group mb-2">
          Search GIF Bitch:
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <input
            className="btn btn-primary mb-2"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    );
  }
}

export default SearchForm;
