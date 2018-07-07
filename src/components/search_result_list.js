import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import GiphyItem from "./giphy_item";

const SearchResultList = props => {
  console.log(props.giphies.length);
  if (!props.giphies) {
    return <div>zzz....</div>;
  }
  const giphies = props.giphies;
  const giphyItems = giphies.map(giphy => {
    return <GiphyItem key={giphy.id} giphy={giphy} />;
  });

  return <ul className="list-group">{giphyItems}</ul>;
};

export default SearchResultList;
