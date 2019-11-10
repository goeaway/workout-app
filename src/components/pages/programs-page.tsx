import * as React from "react";
import { ProgramMutatorState } from "../../state/types";
import { useSelector, useDispatch } from "react-redux";
import { getProgramsForUser } from "../../state/actions/program-actions";
import ProgramListItem from "../program-list-item";

const ProgramsPage: React.FC = () => {
    const isFetching = useSelector((state: { programMutator: ProgramMutatorState }) => state.programMutator.isFetching);
    const programs = useSelector((state: { programMutator: ProgramMutatorState }) => state.programMutator.programs);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getProgramsForUser(1));
    }, []);

    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {programs.map(p => <ProgramListItem program={p} key={p.id} />)}
        </div>
    );
}

export default ProgramsPage;