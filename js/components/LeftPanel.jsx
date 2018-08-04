import PropTypes from 'prop-types';
import React, {Component} from 'react';
import RightPanel from "./RightPanel";
import {find, map} from 'underscore';

export default class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.loadQuestions = this.loadQuestions.bind(this);
        this.getSelectedQuestion = this.getSelectedQuestion.bind(this);
        this.getOptionsForIt = this.getOptionsForIt.bind(this);
        this.state = {
            selectedQuestion: "",
            optionsForIt: []
        };
    }

    getSelectedQuestion() {
        return find(this.props.questions, function (question) {
            return question.isSelected;
        })
    };

    getOptionsForIt(selectedQuestion) {
        return this.props.options.length ? this.props.options[selectedQuestion && selectedQuestion.index]: [];
    };

    loadQuestions() {
        let {questions} = this.props;
        return questions.length ? (
            <ol type="1">
                {
                    map(questions, function (question) {
                        return <li> {question.string} </li>
                    })
                }
            </ol>
        ) : null;
    }

    componentShouldUpdate(nextProps) {
        return this.props.questions.length !== nextProps.questions.length;
    }

    render() {
        let {questions, options, addQuestion, deleteQuestion} = this.props;
        let selectedQuestion = this.getSelectedQuestion();
        let optionsForIt = this.getOptionsForIt();
        return (
            <div>
                <p>Questions</p>
                {this.loadQuestions()}
                <button onClick={addQuestion}>Add</button>
                <button onClick={deleteQuestion}>Delete</button>
                <RightPanel questionDescription={selectedQuestion || ""} options={optionsForIt || []}/>
            </div>
        );

    }
}


LeftPanel.propTypes = {
    questions: PropTypes.array,
    options: PropTypes.array,
    addQuestion: PropTypes.func,
    deleteQuestion: PropTypes.func
};