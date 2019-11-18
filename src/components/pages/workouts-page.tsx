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
        dispatch(getWorkoutsForUser(1));
    }, []);

    const itemClickHandler = (id: number) => {
        history.push(`/workout/${id}`);
    }

    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {workouts.map(w => (
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