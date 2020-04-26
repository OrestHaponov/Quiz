import React from "react";
import { Route, Switch } from "react-router-dom";
import Child from "./Compononts/QuizList/Child";

export default () => (
    <Switch>
        <Route path="/:name" children={<Child />} />
    </Switch>
);