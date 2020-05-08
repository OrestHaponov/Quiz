import React from "react";
import {connect} from "react-redux";
import "./Quiz.scss";
import {chooseAnswer,tryAgain} from "../../Store/Action/Quiz";
import ActiveQuestion from "./ActiveQuestion";
import QuizResults from "./QuizResults";

class Quiz extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="quiz">
                <div className="wrapper">
                <h1>{this.props.quizName}</h1>
                {this.props.endQuiz === false ?
                    <ActiveQuestion 
                        quiz={this.props.quiz}
                        question={this.props.quiz[this.props.activeQuestion].question}
                        answersList={this.props.quiz[this.props.activeQuestion].answers}
                        rightAnswer={this.props.quiz[this.props.activeQuestion].rightAnswer}
                        activeQuestion={this.props.activeQuestion + 1}
                        chooseAnswer={this.props.chooseAnswer}
                    />
                    :
                    <QuizResults 
                        result={this.props.result}
                        tryAgain={this.props.tryAgain}
                    />
                }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        quizes: state.Quiz.quizes,
        activeQuestion: state.Quiz.activeQuestion,
        result: state.Quiz.result,
        endQuiz: state.Quiz.endQuiz,
    }
}

function mapDispatchToProps(dispatch){
    return{
        chooseAnswer: (answerId,rightAnswer,question,quizLength,activeQuestion)=>dispatch(chooseAnswer(answerId,rightAnswer,question,quizLength,activeQuestion)),
        tryAgain: ()=>dispatch(tryAgain()),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Quiz);
