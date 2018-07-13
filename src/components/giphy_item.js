import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const alertStyle = {
  fontSize: "10px"
};

const buttonStyle = {
  marginRight: "5px"
};

class GiphyItem extends Component {
  state = { isLinkClicked: false, isCopied: false };

  handleClick = giphy => {
    console.log("Bookmark as favourite");
  };

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.giphy.images.fixed_height.url}
          alt={this.props.giphy.title}
        />
        <div className="card-body">
          <div className="card-text">
            {this.state.isCopied ? (
              <div className="alert alert-light" style={alertStyle}>
                Giphy Link Copied. Go Crazy.
              </div>
            ) : null}
          </div>
        </div>
        <div className="card-footer">
          <CopyToClipboard
            text={this.props.giphy.url}
            onCopy={() => this.setState({ isCopied: true })}
          >
            <button
              className="btn btn-secondary btn-sm"
              style={buttonStyle}
              onClick={() => {
                this.handleClick(this.props.giphy);
              }}
            >
              Copy Gif
            </button>
          </CopyToClipboard>

          <button
            className="btn btn-secondary btn-sm"
            disabled={true}
            style={buttonStyle}
            onClick={() => {
              this.handleClick(this.props.giphy);
            }}
          >
            Add To Favourites
          </button>
        </div>
      </div>
    );
  }
}

export default GiphyItem;
