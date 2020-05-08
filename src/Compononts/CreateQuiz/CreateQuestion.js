import React from "react";

class CreateQuestion extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="createQuiz__questions-question">
                <h3>Question</h3>
                <input type="text" value={this.props.valueQuestion} onChange={this.props.handleChangeQuestion}/>
                <hr/>
            </div>
        );
    }
}

export default CreateQuestion;
