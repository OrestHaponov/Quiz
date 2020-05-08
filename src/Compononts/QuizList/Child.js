  import React from "react";
  import {useParams, useLocation} from "react-router-dom";
  import Quiz from "../Quiz/Quiz";

  export default function Child() {
      let {name} = useParams();
      const { state } = useLocation();
      let quizQuestions = state.quizQuestions;
    return (
          <Quiz 
            quiz={quizQuestions}
            quizName={name}
          />
    );
  }

