import React from 'react';
import { Segment, Form } from 'semantic-ui-react';
/** @jsx jsx */
import { jsx } from '@emotion/core'

class SearchBar extends React.Component {
    state = { term: '' };
    // naming convention is 'on' + 'name of element' + 'event'
    // onInputChange(event) {
    //     // event.target.value
    // }
    // The below is a shorthand for onFormSubmit: function() {}
    // The function keyword will always result in a broken value of 'this'
    // Arrow functions automatically bind the value of this to the instance
    // of SearchBar
    // onFormSubmit(event) {
    //     event.preventDefault();
    // }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);// the props object will be the value of 'this' inside the onSubmit function
    }


    render() {
        // Note that we pass a reference to the function (i.e. no parenthesese ) so that the input can
        // call the function at some time in the future. Could also use an inline arrow function.
        // However, we prefer controlled vs uncontrolled components.
        // callback is invoked, which calls setState, which in turn will cause the component to re-render.
        // when the component re-renders we assign it to the value prop of the input.
        // If we don't do this cycle, then at any point then the component does not know its own value
        // The value was only stored in the DOM. We want the component state to be the single source of truth.
        return (
            <Segment>
                <Form onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label>
                            Image Search
                            <input
                                type="text"
                                value={ this.state.term }
                                onChange={ (e) => this.setState({ term: e.target.value }) }
                            />
                        </label>
                    </div>
                </Form>
            </Segment>
        );
    }
}

export default SearchBar;