import React, {Component} from 'react';
import LeftPanel from "./js/components/LeftPanel";
import {forEach} from 'underscore';
import './js/components/App.scss';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            options: []
        };
        this.addQuestion = this.addQuestion.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.loadQuestion = this.loadQuestion.bind(this);
        this.updateOptions = this.updateOptions.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
    }

    loadQuestion(question) {
        let questions = forEach(this.state.questions, function (question) {
            question.isSelected ? delete question.isSelected : null;
        });
        this.setState({questions});
    }

    addQuestion() {
        let {questions, options} = this.state;
        questions.push({string: 'Question', index: questions.length});
        options.push([{number: 0}, {number: 1}]);
        this.setState({
            questions,
            options
        });
    }

    addOption(index) {
        let {options} = this.state;
        options[index].push({number: options[index].length, string: ""});
        this.setState({
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

    deleteOptions(index) {
        let {options} = this.state;
        options[index].pop();
        this.setState({
            options
        });
    }

    updateQuestion(question, index) {
        let {questions} = this.state;
        questions[index].string = question;
        this.setState({questions});
    }

    render() {
        let {questions, options} = this.state;
        return (
            <div className={'app'}>
                <LeftPanel questions={questions}
                           options={options}
                           addQuestion={this.addQuestion}
                           addOption={this.addOption}
                           deleteQuestion={this.deleteQuestion}
                           loadQuestion={this.loadQuestion}
                           updateOptions={this.updateOptions}
                           updateQuestion={this.updateQuestion}
                           deleteOptions={this.deleteOptions}
                />
            </div>
        );
    }
}
