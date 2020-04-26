import React from "react";
import AnswersList from "./AnswersList";

class ActiveQuestion extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="quiz__activeQuestion">
                <div className="test">
                    <span>{this.props.activeQuestion}</span>
                    <h3>{this.props.question}</h3>
                </div>
                <AnswersList 
                    answersList={this.props.answersList}
                    chooseAnswer={this.props.chooseAnswer}
                    rightAnswer={this.props.rightAnswer}
                    question={this.props.question}
                    quizLength={this.props.quiz.length}
                    activeQuestion={this.props.activeQuestion}
                />
                <div className="question-count">
                    <h3>{this.props.activeQuestion}/{this.props.quiz.length}</h3>
                </div>
            </div>
        );
    }
}


export default ActiveQuestion;
