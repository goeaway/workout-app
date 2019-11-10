import * as React from "react";
import { WorkoutMutatorState } from "../../state/types";
import { useSelector, useDispatch } from "react-redux";
import { getWorkoutsForUser } from "../../state/actions/workout-actions";
import WorkoutListItem from "../workout-list-item";

const WorkoutsPage: React.FC = () => {
    const isFetching = useSelector((state: { workoutMutator: WorkoutMutatorState }) => state.workoutMutator.isFetching);
    const workouts = useSelector((state: { workoutMutator: WorkoutMutatorState }) => state.workoutMutator.workouts);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getWorkoutsForUser(1));
    }, []);

    return (
        <div>
            {isFetching && <div>Loading...</div>}
            {workouts.map(w => <WorkoutListItem workout={w} key={w.id} />)}
        </div>
    );
}

export default WorkoutsPage;