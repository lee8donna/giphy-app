import React from "react";

const liStyle = {
  border: "0"
};

const buttonStyle = {
  fontSize: "10px"
};

const handleClick = giphy => {
  console.log(giphy.url);
};

const GiphyItem = ({ giphy }) => {
  return (
    <li className="list-group-item" style={liStyle} key={giphy.id}>
      <div className="card">
        <img
          className="card-img-top"
          src={giphy.images.fixed_height.url}
          alt={giphy.title}
        />
        <div className="card-body">
          <h6 className="card-title">{giphy.title}</h6>
          <div className="card-text">
            <small>
              <button
                className="form-control"
                style={buttonStyle}
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
};

export default GiphyItem;
