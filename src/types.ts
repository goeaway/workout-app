export interface Program {
    id: number;
    name: string;
    weeks: Array<Week>;
    commences: Date;
    
}

export interface Week {
    id: number;
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

export interface Workout {
    id: number;
    name: string;
    exercises: Array<Exercise>;
}

export interface Exercise {
    id: number;
    name: string;
    goals: Array<Goal>;
}

export interface Goal {
    id: number;
    weight: number;
    reps: number;
}