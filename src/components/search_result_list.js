import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SearchResultList = props => {
  const liStyle = {
    width: "50%",
    padding: "0px"
  };

  const ulStyle = {
    flexDirection: "row",
    flexWrap: "wrap"
  };

  const handleClick = giphy => {
    console.log(giphy.url);
  };

  console.log(props.giphies.length);
  if (!props.giphies) {
    return <div>zzz....</div>;
  }
  const giphies = props.giphies;
  const giphyItems = giphies.map(giphy => {
    return (
      <li className="list-group-item" style={liStyle} key={giphy.id}>
        <div className="card">
          <img
            className="card-img-top"
            src={giphy.images.fixed_height.url}
            alt={giphy.title}
          />
          <div className="card-body">
            <h5 className="card-title">{giphy.title}</h5>
            <div className="card-text">
              <small>
                <button
                  className="form-control"
                  onClick={() => {
                    handleClick(giphy);
                  }}
                >
                  {giphy.url}
                </button>
              </small>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <ul className="list-group" style={ulStyle}>
      {giphyItems}
    </ul>
  );
};

export default SearchResultList;
