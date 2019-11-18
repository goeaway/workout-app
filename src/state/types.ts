import { Workout, Program } from "../types";

export interface FetchableState {
    isFetching: boolean;
    fetchFailureReason: string;
}

export interface WorkoutMutatorState extends FetchableState {
    workouts: Array<Workout>;
    workout: Workout;
}

export interface ProgramMutatorState extends FetchableState {
    programs: Array<Program>;
}

export interface RunningWorkoutMutatorState {
    workout: Workout;
    isRunning: boolean;
}