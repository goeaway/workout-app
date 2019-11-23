import * as React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProgramMutatorState } from "../../state/types";
import ListItem from "../list-item";
import { getProgramsForUser } from "../../state/actions/program-actions";

const ProgramPage : React.FC = () => {
    const { id } = useParams();
    const [editing, setEditing] = React.useState(false);
    const dispatch = useDispatch();
    const program = useSelector(
        (state: { programMutator: ProgramMutatorState }) => (
            state.programMutator.programs.find(p => p.id === id)
        ));

    React.useEffect(() => {
        dispatch(getProgramsForUser(1));
    }, []);    

    let weekCount = 0;

    return (
        <div>
            {program && program.weeks.map(w => (
                <ListItem 
                    title={++weekCount + "."}
                    key={weekCount}
                    titleAlt={w.commences.toDateString()}
                    contentRender={() => {
                        <ul>
                            {w.workouts.map(wo => <li key={wo.id}>{wo.name}</li>)}
                        </ul>
                    }}
                />
            ))}
        </div>
    );
}

export default ProgramPage;