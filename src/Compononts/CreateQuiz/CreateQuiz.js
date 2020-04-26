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

class CreateQuiz extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <form action="" className="createQuestion">
                <CreateQuizName
                    valueQuizName={this.props.valueQuizName}
                    handleChangeQuizName={this.props.handleChangeQuizName}
                    addQuizName={this.props.addQuizName}
                />
                <CreateQuestion
                    valueQuestion={this.props.valueQuestion}
                    handleChangeQuestion={this.props.handleChangeQuestion}
                    />
                <CreateAnswers      
                    valueAnswerOne={this.props.valueAnswerOne}
                    valueAnswerTwo={this.props.valueAnswerTwo}
                    valueAnswerThree={this.props.valueAnswerThree}
                    valueAnswerFour={this.props.valueAnswerFour}
                    handleChangeAnswerOne={this.props.handleChangeAnswerOne}
                    handleChangeAnswerTwo={this.props.handleChangeAnswerTwo}
                    handleChangeAnswerThree={this.props.handleChangeAnswerThree}
                    handleChangeAnswerFour={this.props.handleChangeAnswerFour}
                    />
                <CreateRightAnswer 
                    valueSelect={this.props.valueSelect}
                    handleChangeSelect={this.props.handleChangeSelect}
                    />
                <AddQuestion
                    valueQuestion={this.props.valueQuestion}
                    valueAnswerOne={this.props.valueAnswerOne}
                    valueAnswerTwo={this.props.valueAnswerTwo}
                    valueAnswerThree={this.props.valueAnswerThree}
                    valueAnswerFour={this.props.valueAnswerFour} 
                    valueSelect={this.props.valueSelect}
                    quiz={this.props.quiz}
                    addQuestion={this.props.addQuestion}
                    />
                <AddQuiz 
                    quiz={this.props.quiz}
                    addQuiz={this.props.addQuiz}
                />
            </form>
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
        addQuiz: (quiz)=>dispatch(addQuiz(quiz)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (CreateQuiz);
