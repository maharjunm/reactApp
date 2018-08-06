import React, {Component} from 'react';
import LeftPanel from "./js/components/LeftPanel";
import {forEach} from 'underscore';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            options: []
        };
        this.addQuestion = this.addQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.loadQuestion = this.loadQuestion.bind(this);
        this.updateOptions = this.updateOptions.bind(this);
    }

    loadQuestion(question) {
        let questions = forEach(this.state.questions, function (question) {
            question.isSelected ? delete question.isSelected : null;
        });
        this.setState({questions});
    }

    addQuestion() {
        let {questions, options} = this.state;
        questions.push({string: "sample Text", index: questions.length});
        options.push([{number: 0, string: "1"}, {number: 1, string: "2"}]);
        this.setState({
            questions,
            options
        });
    }

    deleteQuestion() {
        let {questions, options} = this.state;
        questions.pop();
        options.pop();
        this.setState({
            questions,
            options
        });
    }

    updateOptions(updatedOptions, index) {
        let {options} = this.state;
        options[index] = updatedOptions;
        this.setState({options});
    }

    render() {
        let {questions, options} = this.state;
        return (
            <div>
                <LeftPanel questions={questions}
                           options={options}
                           addQuestion={this.addQuestion}
                           deleteQuestion={this.deleteQuestion}
                           loadQuestion={this.loadQuestion}
                           updateOptions={this.updateOptions}
                />
            </div>
        );
    }
}
