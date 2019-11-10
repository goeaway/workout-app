import { Program } from "../../types";
import { Action } from "redux";

export const PROGRAM_GET = "PROGRAM_GET";
export const PROGRAM_SUCCESS = "PROGRAM_SUCCESS";
export const PROGRAM_FAILURE = "PROGRAM_FAILURE";

export interface ProgramFailureRequest extends Action {
    fetchFailureReason: string;
}

export interface ProgramSuccessRequest extends Action {
    programs: Array<Program>;
}