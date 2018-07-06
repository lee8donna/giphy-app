import React, { Component } from "react";

class SearchResultList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const giphies = this.props.giphies;
    console.log(giphies);
    const giphyItems = giphies.map(giphy => {
      return (
        <li className="list-group-item" key={giphy.id}>
          <div className="card">
            <img
              className="card-img-top"
              src={giphy.images.downsized_medium.url}
              alt={giphy.title}
            />
            <div className="card-body">
              <h5 className="card-title">{giphy.title}</h5>
              <div className="card-text">{giphy.url}</div>
            </div>
          </div>
        </li>
      );
    });
    return <ul className="list-group">{giphyItems}</ul>;
  }
}

export default SearchResultList;
