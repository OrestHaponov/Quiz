import React from "react";
import {handleChangeQuestion,handleChangeAnswerOne,handleChangeAnswerTwo,handleChangeAnswerThree,handleChangeAnswerFour,handleChangeSelect,handleChangeQuizName,addQuestion,addQuiz,addQuizName} from "../../Store/Action/CreateQuiz";
import CreateQuestion from "./CreateQuestion";
import CreateAnswers from "./CreateAnswers";
import CreateRightAnswer from "./CreateRightAnswer";
import AddQuestion from "./AddQuestion";
import AddQuiz from "./AddQuiz";

class CreateQuestions extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="createQuiz__questions">
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
                    <div className="createQuiz__questions-addButtons">
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
                            quizName={this.props.quizName}
                            addQuiz={this.props.addQuiz}
                        />
                    </div>
            </div>
        );
    }
}

export default CreateQuestions;
