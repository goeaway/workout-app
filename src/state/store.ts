import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import workoutMutator from "./mutators/workout-mutator";
import programMutator from "./mutators/program-mutator";
import runningWorkoutMutator from "./mutators/running-workout-mutator";

export function createAppStore() {
    const allMutators = combineReducers({
        programMutator,
        workoutMutator,
        runningWorkoutMutator
    });

    const middleware = compose(
        applyMiddleware(thunkMiddleware)
    );

    return createStore(
        allMutators,
        {},
        middleware
    );
}