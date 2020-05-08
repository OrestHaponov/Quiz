import React from "react";
import {connect} from "react-redux";
import "./QuizList.scss";
import {quizListToggle} from "../../Store/Action/Quiz";
import QuizListHeader from "./QuizListHeader";
import QuizListNames from "./QuizListNames";

class QuizList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="quizList">
                <QuizListHeader 
                    quizListToggle={this.props.quizListToggle}
                    />
                <QuizListNames 
                    quizes={this.props.quizes}
                    showQuizList={this.props.showQuizList}
                    quizListToggle={this.props.quizListToggle}
                />
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        quizes: state.Quiz.quizes,
        showQuizList: state.Quiz.showQuizList,
    }
}

function mapDispatchToProps(dispatch){
    return{
        quizListToggle: ()=>dispatch(quizListToggle()),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (QuizList);
