import * as React from "react";
import { ProgramMutatorState } from "../../state/types";
import { useSelector, useDispatch } from "react-redux";
import { getProgramsForUser } from "../../state/actions/program-actions";
import { useModal } from "react-modal-hook";
import * as ReactModal from "react-modal";
import ListItem from "../list-item";
import { useHistory } from "react-router-dom";

const ProgramsPage: React.FC = () => {
    const isFetching = useSelector((state: { programMutator: ProgramMutatorState }) => state.programMutator.isFetching);
    const programs = useSelector((state: { programMutator: ProgramMutatorState }) => state.programMutator.programs);
    const dispatch = useDispatch();
    const history = useHistory();

    const [showModal, hideModal] = useModal(() => (
        <ReactModal isOpen>
            <p>MODAL</p>
            <button onClick={hideModal}>Hide</button>
        </ReactModal>
    ));

    React.useEffect(() => {
        dispatch(getProgramsForUser(1));
    }, []);

    const itemClickHandler = (id: string) => {
        history.push(`/program/${id}`);
    }

    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {programs.map(p => (
                <ListItem 
                    title={p.name}
                    titleAlt={p.commences.toDateString()}
                    key={p.id}
                    onClick={(e) => itemClickHandler(p.id)}
                    contentRender={() => (
                        <ul>
                            {p.weeks.map(w => (
                                <li className="font-normal text-gray-500" key={w.id}>
                                    <div>{w.commences.toDateString()}</div>
                                    <div>Days {w.workDays}</div>
                                    <div>{w.workouts.map(wo => <span key={wo.id} className="pr-1">{wo.name}</span>)}</div>
                                </li>
                            ))}
                        </ul>
                    )} />
            ))}
            <button onClick={showModal}>Create Program</button>
        </div>
    );
}

export default ProgramsPage;