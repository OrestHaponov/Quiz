import React from "react";

class CreateQuizName extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <form className="createQuiz__name" onSubmit={()=>this.props.addQuizName(this.props.valueQuizName)}>
                <h3>Choose name for your quiz</h3>
                <input type="text" value={this.props.valueQuizName} onChange={this.props.handleChangeQuizName}/>
                <input type="Submit" placeholder="Push" defaultValue="Push"/>
            </form>
        );
    }
}

export default CreateQuizName;
