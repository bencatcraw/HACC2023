import { React, useState } from 'react';
import Data from './config/settings.development.json';

/* A simple static component to render some text for the landing page. */
const Search = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <h1>test</h1>
  );
};
export default Search;
