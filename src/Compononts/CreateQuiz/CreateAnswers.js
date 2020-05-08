import React from "react";

class CreateAnswers extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="createQuiz__questions-answers">
                <label>Variant 1</label>
                <input type="text" value={this.props.valueAnswerOne} onChange={this.props.handleChangeAnswerOne}/>
                <label>Variant 2</label>
                <input type="text" value={this.props.valueAnswerTwo} onChange={this.props.handleChangeAnswerTwo}/>
                <label>Variant 3</label>
                <input type="text" value={this.props.valueAnswerThree} onChange={this.props.handleChangeAnswerThree}/>
                <label>Variant 4</label>
                <input type="text" value={this.props.valueAnswerFour} onChange={this.props.handleChangeAnswerFour}/>
            </ div>
        );
    }
}

export default CreateAnswers;
