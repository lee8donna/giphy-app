import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./components/search_form";
import SearchResultList from "./components/search_result_list";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GIPHY_API = "http://api.giphy.com/v1/gifs/search?q=";
const API_KEY = "&api_key=9O9gZe7JJ7OOCEyHlSMr9jDOyExxRqfz";

class GiphySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { giphies: [] };
  }

  giphySearch(value) {
    //console.log(this.giphies.length);
    // if (this.giphies.length > 0) {
    //   console.log("here");
    //   this.setState({ giphies: [] });
    // }
    let endpoint = GIPHY_API + value + API_KEY;
    console.log(endpoint);
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          giphies: result.data
        });
      });
  }
  render() {
    //console.log(giphies);
    return (
      <div>
        <SearchForm onSearchTermChange={value => this.giphySearch(value)} />
        <SearchResultList giphies={this.state.giphies} />
      </div>
    );
  }
}

ReactDOM.render(<GiphySearch />, document.getElementById("giphy-app"));
