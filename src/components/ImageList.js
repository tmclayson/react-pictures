
/** @jsx jsx */
import { jsx } from '@emotion/core'
import ImageCard from './ImageCard';
import './ImageList.css';
// import

const ImageList = (props) => {
    // 1fr controls the size of the columns in the grid
    const imageListStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridAutoRows: '1px'
    };
    // desctructuring out the fields we are interested in shortens the code slightly { description, id, urls }
    const images = props.images.map((image) => {
        // assigning keys to list items allows React to know if an item needs to be rendered or not
        // if a DOM element with the same key and content already exists, then it doesn't
        // need to be re-rendered. The key should be assigned to the root element.
        // return <img key={ image.id } src={ image.urls.regular } alt={image.description} />
        // css={ { width: '250px' } }
        return <ImageCard key={ image.id } image={ image } />
    });

    return (
        //css={ imageListStyles }
        <div css={ imageListStyles } className="image-list">{ images }</div>
    )
};

export default ImageList;
