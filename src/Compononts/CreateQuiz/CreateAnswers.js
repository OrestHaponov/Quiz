import React from "react";

class CreateAnswers extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="createQuestion__answers">
                <h3>Type answers</h3>
                <input type="text" value={this.props.valueAnswerOne} onChange={this.props.handleChangeAnswerOne}/>
                <input type="text" value={this.props.valueAnswerTwo} onChange={this.props.handleChangeAnswerTwo}/>
                <input type="text" value={this.props.valueAnswerThree} onChange={this.props.handleChangeAnswerThree}/>
                <input type="text" value={this.props.valueAnswerFour} onChange={this.props.handleChangeAnswerFour}/>
            </ div>
        );
    }
}

export default CreateAnswers;
