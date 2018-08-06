import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {map} from 'underscore';

export default class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
        console.log(this.props);
    }
    componentShouldUpdate(nextProps) {
        console.log("in component should update method");
        return this.props.question.index !== nextProps.question.index;
    }
    getOptions() {
        console.log("get Options");
        console.log(this.props.options);
        return this.props.options && this.props.options.map((option) => {
            return <span> {option.number} ) {option.string}</span>
        })
    }

    render() {
        return (
            <div>
                <p> this is sample question</p>
                <p> {this.props.question && this.props.question.string} </p>
                {this.getOptions()}
            </div>
        );
    }
}

RightPanel.propTypes = {
    question: PropTypes.object,
    options: PropTypes.array
};