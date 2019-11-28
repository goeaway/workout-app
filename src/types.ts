export interface Completable {
    completionLevel: CompletionLevel;
}

export interface Identifiable {
    id: string
}

export interface Program extends Identifiable {
    name: string;
    weeks: Array<Week>;
    commences: Date;
}

export interface Week extends Identifiable {
    type: WeekType;
    workouts: Array<Workout>;
    commences: Date;
    /**
     * Represents the amount of days within this week that will have at least one workout
     */
    workDays: number;
}

export enum WeekType {
    Work,
    Deload
}

export interface Workout extends Completable, Identifiable {
    name: string;
    exercises: Array<Exercise>;
}

export interface Exercise extends Completable, Identifiable {
    name: string;
    goals: Array<Goal>;
}

export interface Goal extends Completable, Identifiable {
    weight: number;
    reps: number;
}

export enum CompletionLevel {
    InComplete,
    Failed,
    Missed,
    Complete
}