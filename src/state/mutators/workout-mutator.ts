import { Action } from "redux";
import { WORKOUT_GET, WORKOUTS_SUCCESS, WORKOUT_FAILURE, WorkoutsSuccessRequest, WorkoutFailureRequest, WorkoutSuccessRequest, WORKOUT_SUCCESS } from "../requests/workout-requests";
import { WorkoutMutatorState } from "../types";

const DEFAULT_STATE : WorkoutMutatorState = {
    isFetching: false,
    workouts: [], 
    fetchFailureReason: null,
    workout: null
}

export default function workoutMutator(state: WorkoutMutatorState = DEFAULT_STATE, action: Action) {
    switch(action.type) {
        case WORKOUT_GET: {
            return Object.assign({}, state, {
                isFetching: true,
                fetchFailureReason: null
            });
        }
        case WORKOUTS_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                workouts: (action as WorkoutsSuccessRequest).workouts
            });
        }
        case WORKOUT_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                workout: (action as WorkoutSuccessRequest).workout
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