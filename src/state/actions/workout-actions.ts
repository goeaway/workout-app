import { WorkoutsSuccessRequest, WorkoutFailureRequest, WORKOUT_GET, WORKOUT_FAILURE, WORKOUTS_SUCCESS, WorkoutSuccessRequest, WORKOUT_SUCCESS } from "../requests/workout-requests";
import { Workout } from "../../types";
import { Action } from "redux";

export function getWorkoutsForUser(userId: number) {
    return async (dispatch: Function) => {
        dispatch(requestWorkouts());

        return fetch("https://httpstat.us/200", {
            method: "POST",
            headers: { 'Content-Type': "application/json"},
            body: JSON.stringify({userId})
        })
        .then(response => {
            if(!response.ok) {
                dispatch(requestWorkoutsFailure(""));
                return Promise.reject();
            } else {
                dispatch(requestWorkoutsSuccess([
                    { id: 1, name: "Monday", exercises: [{id: 1, name: "Squat", goals: []}, {id: 2, name: "Bench", goals: []}, {id: 3, name: "Deadlift", goals: []}]},
                    { id: 2, name: "Wednesday", exercises: [{id: 1, name: "Squat", goals: []}, {id: 2, name: "Bench", goals: []}, {id: 3, name: "Deadlift", goals: []}]},
                    { id: 3, name: "Friday", exercises: [{id: 1, name: "Squat", goals: []}, {id: 2, name: "Bench", goals: []}, {id: 3, name: "Deadlift", goals: []}]}
                ]));
            }
        })
        .catch(err => dispatch(requestWorkoutsFailure(err)));
    }
}

export function getWorkout(id: number) {
    return (dispatch: Function) => {
        dispatch(requestWorkouts());

        return fetch("https://httpstat.us/200", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })
        .then(response => {
            if(!response.ok) {
                dispatch(requestWorkoutsFailure(""));
                return Promise.reject();
            } else {
                dispatch(requestWorkoutSuccess({
                    id: 1, exercises: [], name: "my workout"
                }));
            }
        })
        .catch(err => dispatch(requestWorkoutsFailure(err)));
    }
}

function requestWorkouts() : Action {
    return {
        type: WORKOUT_GET
    };
}

function requestWorkoutsFailure(reason: string) : WorkoutFailureRequest {
    return {
        type: WORKOUT_FAILURE,
        fetchFailureReason: reason
    };
} 

function requestWorkoutsSuccess(workouts: Array<Workout>) : WorkoutsSuccessRequest {
    return {
        type: WORKOUTS_SUCCESS,
        workouts
    };
}

function requestWorkoutSuccess(workout: Workout) : WorkoutSuccessRequest {
    return {
        type: WORKOUT_SUCCESS,
        workout
    };
}