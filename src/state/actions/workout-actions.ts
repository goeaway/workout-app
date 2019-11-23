import { WorkoutsSuccessRequest, WorkoutFailureRequest, WORKOUT_GET, WORKOUT_FAILURE, WORKOUTS_SUCCESS, WorkoutSuccessRequest, WORKOUT_SUCCESS } from "../requests/workout-requests";
import { Workout } from "../../types";
import { Action } from "redux";

export function getWorkoutsForUser(userId: string) {
    return async (dispatch: Function) => {
        dispatch(requestWorkouts());

        try {
            const response = await fetch(`https://localhost:44341/api/workout/getworkoutsforuser/${userId}`);
    
            if(!response.ok) {
                dispatch(requestWorkoutsFailure(response.statusText));
            }
    
            const workouts: Array<Workout> = await response.json();
            dispatch(requestWorkoutsSuccess(workouts));
        }
        catch (err) {
            dispatch(requestWorkoutsFailure(err));            
        }
    }
}

export function getWorkout(id: string) {
    return async (dispatch: Function) => {
        dispatch(requestWorkouts());

        try {
            const response = await fetch(`https://localhost:44341/api/workout/getworkout/${id}`);
    
            if(!response.ok) {
                dispatch(requestWorkoutsFailure(response.statusText));
            }
    
            const workout: Workout = await response.json();
            dispatch(requestWorkoutSuccess(workout));
        }
        catch (err) {
            dispatch(requestWorkoutsFailure(err));
        }


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