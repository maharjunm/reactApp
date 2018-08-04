import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class LeftPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // {questions, options} = {this.props}
        return (
            <div>
                {this.props.questions.length ? (<p>This is Questions</p>): null}
                <p> this is text</p>
                <button>Add</button><button>Delete</button>
            </div>
        );

    }
}


LeftPanel.propTypes = {
    questions: PropTypes.array,
    options: PropTypes.array
};