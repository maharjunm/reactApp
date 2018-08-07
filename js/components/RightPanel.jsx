import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class RightPanel extends Component {
    constructor(props) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
    }

    componentWillMount() {
        console.log("in component will mount");
        this.state = {
            question: this.props.question,
            options: this.props.options
        };
    }

    componentShouldUpdate(nextProps) {
        return this.props.question.index !== nextProps.question.index;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            question: nextProps.question,
            options: nextProps.options
        });
    }

    _handleChangeEvent(index, e) {
        let {options, question} = this.state;
        options[index].string = e.target.value;
        this.props.updateOptions(options, question.index);
    }

    _handleQuestionChangeEvent(index, e) {
        console.log("on change");
        console.log(index, e)
        this.props.updateQuestion(e.target.value, index);
    }



    getOptions(options) {
        return options && options.map((option) => {
            return <li><input onChange={(e) => {
                this._handleChangeEvent(option.number, e);
            }} type='text' value={option.string}/></li>;
        })
    }

    render() {
        let {question, options} = this.state;
        return (
            <div>
                <p> this is sample question</p>
                {question.string &&
                <input type='text' onChange={(e) => {this._handleQuestionChangeEvent(question.index, e)}} value={question.string}/>
                }
                <ol>
                    {this.getOptions(options)}
                </ol>
            </div>
        );
    }
}

RightPanel.propTypes = {
    question: PropTypes.object,
    options: PropTypes.array,
    updateOptions: PropTypes.func,
    updateQuestion: PropTypes.func
};