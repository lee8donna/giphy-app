import React from "react";
import GiphyItem from "./giphy_item";
import chunk from "lodash/chunk";

const SearchResultList = props => {
  console.log(props.giphies.length);
  if (!props.giphies) {
    return <div>zzz....</div>;
  }
  const giphies = props.giphies;
  const giphy_rows = chunk(giphies, 2);

  console.log(giphy_rows);

  const giphyRow = giphy_rows.map(giphy_row => {
    const giphyItems = giphy_row.map(giphy => {
      return <GiphyItem key={giphy.id} giphy={giphy} />;
    });
    return <div className="card-deck">{giphyItems}</div>;
  });

  return <div>{giphyRow}</div>;
};

export default SearchResultList;
