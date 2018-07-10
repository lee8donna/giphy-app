import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./components/search_form";
import SearchResultList from "./components/search_result_list";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GIPHY_API = "http://api.giphy.com/v1/gifs/search?q=";
const API_KEY = "&api_key=9O9gZe7JJ7OOCEyHlSMr9jDOyExxRqfz";

class GiphySearch extends React.Component {
  state = { giphies: [], lastQuery: null };

  giphySearch(value) {
    //console.log(this.giphies.length);
    // if (this.giphies.length > 0) {
    //   console.log("here");
    //   this.setState({ giphies: [] });
    // }
    const endpoint = GIPHY_API + value + API_KEY;
    console.log(endpoint);
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          lastQuery: value,
          giphies: result.data
        });
      });
  }
  render() {
    return (
      <div className="container">
        <h1>Stupid GIphy Search</h1>
        <SearchForm
          lastQuery={this.state.lastQuery}
          onSearchTermSubmit={value => this.giphySearch(value)}
        />
        <div className="alert alert-secondary">
          You searched for <b>{this.state.lastQuery}</b>
        </div>
        <SearchResultList giphies={this.state.giphies} />
      </div>
    );
  }
}

ReactDOM.render(<GiphySearch />, document.getElementById("giphy-app"));
