import * as React from "react";
import { WorkoutMutatorState } from "../../state/types";
import { useSelector, useDispatch } from "react-redux";
import { getWorkoutsForUser } from "../../state/actions/workout-actions";
import ListItem from "../list-item";
import { useHistory } from "react-router";

const WorkoutsPage: React.FC = () => {
    const isFetching = useSelector((state: { workoutMutator: WorkoutMutatorState }) => state.workoutMutator.isFetching);
    const workouts = useSelector((state: { workoutMutator: WorkoutMutatorState }) => state.workoutMutator.workouts);
    const dispatch = useDispatch();
    const history = useHistory();

    React.useEffect(() => {
        dispatch(getWorkoutsForUser("value"));
    }, []);

    const itemClickHandler = (id: string) => {
        history.push(`/workout/${id}`);
    }
debugger;
    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {workouts && workouts.map(w => (
                <ListItem 
                    title={w.name}
                    key={w.id}
                    onClick={(e) => itemClickHandler(w.id)}
                    contentRender={() => (
                        <ul>
                            {w.exercises.map(e => (
                                <li className="font-normal text-gray-600" key={e.id}>{e.name}</li>
                            ))}
                        </ul>
                    )}
                />
            ))}
        </div>
    );
}

export default WorkoutsPage;