import PropTypes from 'prop-types';
import React, {Component} from 'react';
import RightPanel from "./RightPanel";
import {find, map} from 'underscore';

export default class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuestion: {index: -1},
            optionsForIt: []
        };
        this.loadQuestions = this.loadQuestions.bind(this);
    }

    loadQuestions() {
        let viewQuestions = [];
        this.props.questions.map((question) => {
            viewQuestions.push(<li onClick={() => this.loadQuestion(question)}> {question.string}</li>);
        });
        return viewQuestions;
    }

    loadQuestion(question) {
        this.setState({
            selectedQuestion: question,
            optionsForIt: this.props.options[question.index]
        });
    }

    componentShouldUpdate(nextProps) {
        return this.props.questions.length !== nextProps.questions.length;
    }

    render() {
        let {addQuestion, deleteQuestion, updateOptions, deleteOptions, updateQuestion, addOption} = this.props;
        let {selectedQuestion, optionsForIt} = this.state;
        return (
            <div>
                <p>Select your Questions</p>
                <ol type="1">
                    {this.loadQuestions()}
                </ol>
                <button onClick={addQuestion}>Add</button>
                <button onClick={deleteQuestion}>Delete</button>
                <RightPanel
                    updateOptions={updateOptions}
                    updateQuestion={updateQuestion}
                    question={selectedQuestion}
                    options={optionsForIt}
                    addOption={addOption}
                    deleteOptions={deleteOptions}
                />
            </div>
        );

    }
}


LeftPanel.propTypes = {
    questions: PropTypes.array,
    options: PropTypes.array,
    addQuestion: PropTypes.func,
    deleteQuestion: PropTypes.func,
    loadQuestion: PropTypes.func,
    updateOptions: PropTypes.func,
    updateQuestion: PropTypes.func,
    addOption: PropTypes.func,
    deleteOptions: PropTypes.func
};