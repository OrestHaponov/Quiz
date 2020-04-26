import React from "react";

class AddQuestion extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <input type="button" value="Add question" 
                onClick={()=>this.props.addQuestion(this.props.quiz,this.props.valueQuestion,this.props.valueAnswerOne,this.props.valueAnswerTwo,this.props.valueAnswerThree,this.props.valueAnswerFour,this.props.valueSelect)}/>
        );
    }
}

export default AddQuestion;
