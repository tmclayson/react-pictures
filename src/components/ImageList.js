import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'

const ImageList = (props) => {
    // 1fr controls the size of the columns in the grid
    const imageListStyles = {
        display: 'grid',
        gridTemplateColumns: repeat(auto_fill, minmax(250px, 1fr)),
        gridGap: '10px',
        gridAutoRows: '200px'
    };
    // desctructuring out the fields we are interested in shortens the code slightly
    const images = props.images.map(({ description, id, urls }) => {
        // assigning keys to list items allows React to know if an item needs to be rendered or not
        // if a DOM element with the same key and content already exists, then it doesn't
        // need to be re-rendered. The key should be assigned to the root element.
        // return <img key={ image.id } src={ image.urls.regular } alt={image.description} />
        return <img css={ { width: '250px' } } key={ id } src={ urls.regular } alt={ description } />
    });

    return (
        <div css={ imageListStyles }>{ images }</div>
    )
};

export default ImageList;
