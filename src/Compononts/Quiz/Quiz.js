import React from "react";
import {connect} from "react-redux";
import {chooseAnswer,returnToQuiz} from "../../Store/Action/Quiz";
import ActiveQuestion from "./ActiveQuestion";
import QuizResults from "./QuizResults";

class Quiz extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let quiz = this.props.quizes.filter(findQuiz=>findQuiz.name == this.props.quizName);
        return (
            <div className="quiz">
                <div className="wrapper">
                {this.props.endQuiz === false ?
                    <ActiveQuestion 
                        quiz={quiz}
                        question={quiz[this.props.activeQuestion].question}
                        answersList={quiz[this.props.activeQuestion].answers}
                        rightAnswer={quiz[this.props.activeQuestion].rightAnswer}
                        activeQuestion={this.props.activeQuestion + 1}
                        chooseAnswer={this.props.chooseAnswer}
                    />
                    :
                    <QuizResults 
                        result={this.props.result}
                        returnToQuiz={this.props.returnToQuiz}
                    />
                }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        // quiz: state.Quiz.quiz,
        quizes: state.Quiz.quizes,
        activeQuestion: state.Quiz.activeQuestion,
        result: state.Quiz.result,
        endQuiz: state.Quiz.endQuiz,
    }
}

function mapDispatchToProps(dispatch){
    return{
        chooseAnswer: (answerId,rightAnswer,question,quizLength,activeQuestion)=>dispatch(chooseAnswer(answerId,rightAnswer,question,quizLength,activeQuestion)),
        returnToQuiz: ()=>dispatch(returnToQuiz()),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Quiz);
