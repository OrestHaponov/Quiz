import React from "react";
import Answer from "./Answer";

class AnswersList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul className="quiz__activeQuestion-answerList">
                {this.props.answersList.map((value,index)=>{
                    return(
                        <Answer 
                            key={index} 
                            answer={value.answer}
                            answerId={value.id}
                            quiz={this.props.quiz}
                            rightAnswer={this.props.rightAnswer}
                            question={this.props.question}
                            chooseAnswer={this.props.chooseAnswer}
                            quizLength={this.props.quizLength}
                            activeQuestion={this.props.activeQuestion}
                        />
                    )
                })}
            </ul>
        );
    }
}


export default AnswersList;
