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
            viewQuestions.push(<span onClick={() =>this.loadQuestion(question)}> {question.string}</span>);
        });
        return viewQuestions;
    }

    loadQuestion(question) {
        console.log(question);
        console.log(this.props.options[question.index]);
        this.setState({
            selectedQuestion: question,
            optionsForIt: this.props.options[question.index]
        });
    }

    componentShouldUpdate(nextProps, nextState) {
        console.log("in leftPanel update");
        return this.props.questions.length !== nextProps.questions.length || this.state.selectedQuestion.index !== nextState.selectedQuestion.index;
    }

    render() {
        let {questions, options, addQuestion, deleteQuestion} = this.props;
        let {selectedQuestion, optionsForIt } = this.state;
        return (
            <div>
                <p>Questions</p>
                {this.loadQuestions()}
                <button onClick={addQuestion}>Add</button>
                <button onClick={deleteQuestion}>Delete</button>
                <RightPanel question={selectedQuestion} options={optionsForIt}/>
            </div>
        );

    }
}


LeftPanel.propTypes = {
    questions: PropTypes.array,
    options: PropTypes.array,
    addQuestion: PropTypes.func,
    deleteQuestion: PropTypes.func,
    loadQuestion: PropTypes.func
};