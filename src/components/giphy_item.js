import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const liStyle = {
  width: "50%",
  border: "0"
};

const alertStyle = {
  fontSize: "10px",
  padding: "5px"
};

class GiphyItem extends Component {
  state = { isLinkClicked: false, isCopied: false };

  handleClick = giphy => {
    console.log("Bookmark as favourite");
    //this.setState({ isLinkClicked: true });
    //console.log(this.state.isLinkedClicked);
  };

  render() {
    return (
      <li className="list-group-item" style={liStyle} key={this.props.giphy.id}>
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.giphy.images.fixed_height.url}
            alt={this.props.giphy.title}
          />
          <div className="card-body">
            <div className="card-text">
              {this.state.isCopied ? (
                <div
                  className="alert alert-light alert-dismissable fade show"
                  style={alertStyle}
                >
                  Giphy Link Copied. Go Crazy.
                </div>
              ) : null}
              <CopyToClipboard
                text={this.props.giphy.url}
                onCopy={() => this.setState({ isCopied: true })}
              >
                <a
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    this.handleClick(this.props.giphy);
                  }}
                >
                  Copy Gif
                </a>
              </CopyToClipboard>

              <button
                className="btn btn-secondary btn-sm"
                disabled={true}
                onClick={() => {
                  this.handleClick(this.props.giphy);
                }}
              >
                Add To Favourites
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default GiphyItem;
