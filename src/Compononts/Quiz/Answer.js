import React from "react";

class Answer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li 
                onClick={()=>this.props.chooseAnswer(
                            this.props.answerId,
                            this.props.rightAnswer,
                            this.props.question,
                            this.props.quizLength,
                            this.props.activeQuestion
                            )}>
                {this.props.answer}
            </li>
        );
    }
}


export default Answer;
