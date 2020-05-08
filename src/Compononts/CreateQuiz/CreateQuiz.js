import React from "react";
import {connect} from "react-redux";
import "./CreateQuiz.scss";
import {handleChangeQuestion,handleChangeAnswerOne,handleChangeAnswerTwo,handleChangeAnswerThree,handleChangeAnswerFour,handleChangeSelect,handleChangeQuizName,addQuestion,addQuiz,addQuizName} from "../../Store/Action/CreateQuiz";
import CreateQuestion from "./CreateQuestion";
import CreateAnswers from "./CreateAnswers";
import CreateRightAnswer from "./CreateRightAnswer";
import AddQuestion from "./AddQuestion";
import AddQuiz from "./AddQuiz";
import CreateQuizName from "./CreateQuizName";
import CreateQuestions from "./CreateQuestions";

class CreateQuiz extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="createQuiz">
                <div className="wrapper">
                    {this.props.addName === false ?
                    <CreateQuizName
                        addName={this.props.addName}
                        valueQuizName={this.props.valueQuizName}
                        handleChangeQuizName={this.props.handleChangeQuizName}
                        addQuizName={this.props.addQuizName}
                    />
                    :
                    <CreateQuestions 
                        valueQuestion={this.props.valueQuestion}
                        handleChangeQuestion={this.props.handleChangeQuestion}
                        valueAnswerOne={this.props.valueAnswerOne}
                        valueAnswerTwo={this.props.valueAnswerTwo}
                        valueAnswerThree={this.props.valueAnswerThree}
                        valueAnswerFour={this.props.valueAnswerFour}
                        handleChangeAnswerOne={this.props.handleChangeAnswerOne}
                        handleChangeAnswerTwo={this.props.handleChangeAnswerTwo}
                        handleChangeAnswerThree={this.props.handleChangeAnswerThree}
                        handleChangeAnswerFour={this.props.handleChangeAnswerFour}
                        valueSelect={this.props.valueSelect}
                        handleChangeSelect={this.props.handleChangeSelect}
                        quiz={this.props.quiz}
                        addQuestion={this.props.addQuestion}
                        quizName={this.props.quizName}
                        addQuiz={this.props.addQuiz}
                    
                    /> 
                    } 
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        valueQuizName: state.CreateQuiz.valueQuizName,
        valueQuestion: state.CreateQuiz.valueQuestion,
        valueAnswerOne: state.CreateQuiz.valueAnswerOne,
        valueAnswerTwo: state.CreateQuiz.valueAnswerTwo,
        valueAnswerThree: state.CreateQuiz.valueAnswerThree,
        valueAnswerFour: state.CreateQuiz.valueAnswerFour,
        valueSelect: state.CreateQuiz.valueSelect,
        quizes: state.Quiz.quizes,
        addName: state.CreateQuiz.addName,
        quizName: state.Quiz.quizName,
        quiz: state.Quiz.quiz,
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleChangeQuizName: (valueQuizName)=>dispatch(handleChangeQuizName(valueQuizName)),
        addQuizName: (valueQuizName)=>dispatch(addQuizName(valueQuizName)),
        handleChangeQuestion: (valueQuestion)=>dispatch(handleChangeQuestion(valueQuestion)),
        handleChangeAnswerOne: (valueAnswerOne)=>dispatch(handleChangeAnswerOne(valueAnswerOne)),
        handleChangeAnswerTwo: (valueAnswerTwo)=>dispatch(handleChangeAnswerTwo(valueAnswerTwo)),
        handleChangeAnswerThree: (valueAnswerThree)=>dispatch(handleChangeAnswerThree(valueAnswerThree)),
        handleChangeAnswerFour: (valueAnswerFour)=>dispatch(handleChangeAnswerFour(valueAnswerFour)),
        handleChangeSelect: (valueSelect)=>dispatch(handleChangeSelect(valueSelect)),
        addQuestion: (quiz,valueQuestion,valueAnswerOne,valueAnswerTwo,valueAnswerThree,valueAnswerFour,valueSelect)=>dispatch(addQuestion(quiz,valueQuestion,valueAnswerOne,valueAnswerTwo,valueAnswerThree,valueAnswerFour,valueSelect)),
        addQuiz: (quiz,quizName)=>dispatch(addQuiz(quiz,quizName)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (CreateQuiz);
