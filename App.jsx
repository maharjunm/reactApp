import React, {Component} from 'react';
import LeftPanel from "./js/components/LeftPanel";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.addQuestion = this.addQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.state = {
            questions: [],
            options: []
        };
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

    render() {
        let {questions, options} = this.state;
        return (
            <div>
                <LeftPanel questions={questions || []}
                           options={options || []}
                           addQuestion={this.addQuestion}
                           deleteQuestion={this.deleteQuestion}
                />
            </div>
        );
    }
}
