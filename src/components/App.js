import React from 'react';
import { Container } from 'semantic-ui-react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'



class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        // returns a promise
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        //
        // onSearchSubmit is passed as a prop to SearchBar, so (unless an arrow function is used, or a constructor binds it)
        // when it gets called, 'this' would actually refer to the props object
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <Container css={ { marginTop: '10px' } }>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                <ImageList images={ this.state.images } />
            </Container >
        );
    }
}

export default App;