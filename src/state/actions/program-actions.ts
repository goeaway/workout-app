import { ProgramsGetSuccessRequest, PROGRAM_GET, ProgramFailureRequest, PROGRAM_FAILURE, PROGRAM_SUCCESS } from "../requests/program-requests";
import { Program, WeekType } from "../../types";
import { Action } from "redux";

export function getProgramsForUser(userId: number) {
    return async (dispatch: Function) => {
        dispatch(requestPrograms());

        return fetch("https://httpstat.us/200", {
            method: "GET",
            headers: { 'Content-Type': "application/json" }
        })
        .then(response => {
            if(!response.ok) {
                dispatch(requestProgramsFailure(""));
                return Promise.reject();
            } else {
                dispatch(requestProgramsSuccess([
                    { 
                        id: 1, 
                        name: "Texas Method", 
                        weeks: [
                            { 
                                id: 1, 
                                workDays: 3, 
                                type: WeekType.Work, 
                                commences: new Date(), 
                                workouts: [
                                    {
                                        id: 10, 
                                        name: "Monday",
                                        exercises: []
                                    },
                                    {
                                        id: 9, 
                                        name: "Wednesday",
                                        exercises: []
                                    },
                                    {
                                        id: 8, 
                                        name: "Friday",
                                        exercises: []
                                    }
                                ]
                            }
                        ], 
                        commences: new Date()
                    },
                    { 
                        id: 2, 
                        name: "Candito 6 Week", 
                        weeks: [
                            { 
                                id: 2, 
                                workDays: 6, 
                                type: WeekType.Work, 
                                commences: new Date(), 
                                workouts: [
                                    {
                                        id: 1, 
                                        name: "Monday",
                                        exercises: []
                                    },
                                    {
                                        id: 2, 
                                        name: "Wednesday",
                                        exercises: []
                                    },
                                    {
                                        id: 3, 
                                        name: "Friday",
                                        exercises: []
                                    }
                                ]
                            },
                            { 
                                id: 3, 
                                workDays: 6, 
                                type: WeekType.Work, 
                                commences: new Date(), 
                                workouts: [
                                    {
                                        id: 4, 
                                        name: "Monday",
                                        exercises: []
                                    },
                                    {
                                        id: 5, 
                                        name: "Wednesday",
                                        exercises: []
                                    },
                                    {
                                        id: 6, 
                                        name: "Friday",
                                        exercises: []
                                    }
                                ]
                            }
                        ], 
                        commences: new Date()
                    }
                ]));
            }
        })
        .catch(err => dispatch(requestProgramsFailure(err)));
    };
}

export function getProgram(id: number) {
    return async (dispatch: Function) => {
        dispatch();

        
    }
}

export function requestPrograms() : Action {
    return {
        type: PROGRAM_GET
    };
}

export function requestProgramsFailure(reason: string) : ProgramFailureRequest {
    return {
        type: PROGRAM_FAILURE,
        fetchFailureReason: reason
    };
}

export function requestProgramsSuccess(programs: Array<Program>) : ProgramsGetSuccessRequest {
    return {
        type: PROGRAM_SUCCESS,
        programs
    };
}