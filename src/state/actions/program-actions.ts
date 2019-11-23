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
                dispatch(requestProgramsSuccess([]));
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