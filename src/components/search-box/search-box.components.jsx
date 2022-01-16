import React from "react";

import './search-box.styles.css';

export const SearchBox = ({placeholder, handlerChange}) => {
    return <input type='search' className="search"
        placeholder={ placeholder }
        onChange={ handlerChange }
    />
};