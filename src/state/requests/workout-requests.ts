import { Workout } from "../../types";
import { Action } from "redux";

export const WORKOUT_GET = "WORKOUT_GET";
export const WORKOUT_SUCCESS = "WORKOUT_SUCCESS";
export const WORKOUT_FAILURE = "WORKOUT_FAILURE";
export const WORKOUT_START = "WORKOUT_START";
export const WORKOUT_STOP = "WORKOUT_STOP";

export interface WorkoutFailureRequest extends Action {
    fetchFailureReason: string;
}

export interface WorkoutSuccessRequest extends Action {
    workouts: Array<Workout>;
}

export interface WorkoutStartRequest extends Action {
    workout: Workout;
}
