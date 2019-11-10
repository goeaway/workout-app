import { Action } from "redux";
import { PROGRAM_GET, PROGRAM_SUCCESS, PROGRAM_FAILURE, ProgramSuccessRequest, ProgramFailureRequest } from "../requests/program-requests";
import { ProgramMutatorState } from "../types";

const DEFAULT_STATE: ProgramMutatorState = {
    isFetching: false,
    programs: [],
    fetchFailureReason: null
};

export default function programMutator(state: ProgramMutatorState = DEFAULT_STATE, action: Action) {
    switch(action.type) {
        case PROGRAM_GET: {
            return Object.assign({}, state, {
                isFetching: true, 
                fetchFailureReason: null
            });
        }
        case PROGRAM_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                programs: (action as ProgramSuccessRequest).programs
            });
        }
        case PROGRAM_FAILURE: {
            return Object.assign({}, state, {
                isFetching: false,
                fetchFailureReason: (action as ProgramFailureRequest).fetchFailureReason
            });
        }
        default: {
            return state;
        }
    }
}