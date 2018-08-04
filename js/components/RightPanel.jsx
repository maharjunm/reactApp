import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {map} from 'underscore';

export default class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
    }

    getOptions() {
        return <ul>
            {
                map(this.props.options, (option) => {
                    return <li> {option.number} {option.string}</li>
                })
            }
        </ul>
    }

    render() {
        return (
            <div>
                <p> {this.props.questionDescription} </p>
                {this.getOptions()}
            </div>
        );
    }
}

RightPanel.propTypes = {
    questionDescription: PropTypes.string,
    options: PropTypes.array
};