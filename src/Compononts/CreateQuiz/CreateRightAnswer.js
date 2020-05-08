import React from "react";

class CreateRightAnswer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="createQuiz__questions-rightanswer">
                <label>Choose right answer</label>
                <select value={this.props.valueSelect} onChange={this.props.handleChangeSelect} className="createQuestion__select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        );
    }
}

export default CreateRightAnswer;
