import React from "react";

class CreateQuizName extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="createName">
                <h3>Please create name</h3>
                <input type="text" value={this.props.valueQuizName} onChange={this.props.handleChangeQuizName}/>
                <button onClick={()=>this.props.addQuizName(this.props.valueQuizName)}>Push</button>
            </div>
        );
    }
}

export default CreateQuizName;
