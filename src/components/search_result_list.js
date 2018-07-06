import React, { Component } from "react";

const SearchResultList = props => {
  console.log(props.giphies.length);
  if (!props.giphies) {
    return <div>zzz....</div>;
  }
  const giphies = props.giphies;
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
            <div className="card-text">
              <p>
                <input
                  className="form-control"
                  type="text"
                  placeholder={giphy.url}
                  readOnly
                />
              </p>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return <ul className="list-group">{giphyItems}</ul>;
};

export default SearchResultList;
