import React from "react";
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

  return <div className="card-group">{giphyItems}</div>;
};

export default SearchResultList;
