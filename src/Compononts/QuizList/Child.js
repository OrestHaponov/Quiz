import React from "react";
import {
  useParams
} from "react-router-dom";
import QuizList from "./QuizList";
import Quiz from "../Quiz/Quiz";

export default function Child() {
    let {name} = useParams();
  return (
    <div className="user">
        <h1>{name}</h1>
        <Quiz quizName={name}/>
    </div>
  );
}

