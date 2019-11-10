import { Action } from "redux";
import { WORKOUT_GET, WORKOUT_SUCCESS, WORKOUT_FAILURE, WorkoutSuccessRequest, WorkoutFailureRequest } from "../requests/workout-requests";
import { WorkoutMutatorState } from "../types";

const DEFAULT_STATE : WorkoutMutatorState = {
    isFetching: false,
    workouts: [], 
    fetchFailureReason: null
}

export default function workoutMutator(state: WorkoutMutatorState = DEFAULT_STATE, action: Action) {
    switch(action.type) {
        case WORKOUT_GET: {
            return Object.assign({}, state, {
                isFetching: true,
                fetchFailureReason: null
            });
        }
        case WORKOUT_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                workouts: (action as WorkoutSuccessRequest).workouts
            });
        }
        case WORKOUT_FAILURE: {
            return Object.assign({}, state, {
                isFetching: false,
                fetchFailureReason: (action as WorkoutFailureRequest).fetchFailureReason
            });
        }
        default: {
            return state;
        }
    }
}