import * as React from "react";
import { ProgramMutatorState } from "../../state/types";
import { useSelector, useDispatch } from "react-redux";
import { getProgramsForUser } from "../../state/actions/program-actions";
import ProgramListItem from "../program-list-item";
import { useModal } from "react-modal-hook";
import * as ReactModal from "react-modal";

const ProgramsPage: React.FC = () => {
    const isFetching = useSelector((state: { programMutator: ProgramMutatorState }) => state.programMutator.isFetching);
    const programs = useSelector((state: { programMutator: ProgramMutatorState }) => state.programMutator.programs);
    const dispatch = useDispatch();

    const [showModal, hideModal] = useModal(() => (
        <ReactModal isOpen>
            <p>MODAL</p>
            <button onClick={hideModal}>Hide</button>
        </ReactModal>
    ));

    React.useEffect(() => {
        dispatch(getProgramsForUser(1));
    }, []);

    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {programs.map(p => <ProgramListItem program={p} key={p.id} />)}
            <button onClick={showModal}>Create Program</button>
        </div>
    );
}

export default ProgramsPage;