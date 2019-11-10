import { Action } from "redux";
import { WORKOUT_START, WorkoutStartRequest, WORKOUT_STOP } from "../requests/workout-requests";
import { RunningWorkoutMutatorState } from "../types";

const DEFAULT_STATE : RunningWorkoutMutatorState = {
    isRunning: false,
    workout: null
};

export default function runningWorkoutMutator(state : RunningWorkoutMutatorState = DEFAULT_STATE, action: Action) {
    switch(action.type) {
        case WORKOUT_START: {
            return Object.assign({}, state, {
                isRunning: true,
                workout: (action as WorkoutStartRequest).workout
            });
        }
        case WORKOUT_STOP: {
            return Object.assign({}, state, {
                isRunning: false,
                workout: null
            });
        }
        default: {
            return state;
        }
    }
}