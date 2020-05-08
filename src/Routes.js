import React from "react";
import { Route, Switch } from "react-router-dom";
import Child from "./Compononts/QuizList/Child";
import CreateQuiz from "./Compononts/CreateQuiz/CreateQuiz";
import DonePage from "./Compononts/CreateQuiz/DonePage";

export default () => (
    <Switch>
        <Route path="/createQuiz" exact component={CreateQuiz}/>
        <Route path="/createdQuiz" exact component={DonePage}/>
        <Route path="/:name" children={<Child />} />
        <Route path="/" />
    </Switch>
);