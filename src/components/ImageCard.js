import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const spans = Math.ceil(this.imageRef.current.clientHeight + 10);
        this.setState({ spans })
    }

    render() {
        const { urls, description } = this.props.image;
        return (
            <div css={{ gridRowEnd: `span ${ this.state.spans }`} }>
                <img css={{ width: '250px' }} ref={ this.imageRef } src={ urls.regular } alt={ description } />
            </div>

        );
    }
}

export default ImageCard;