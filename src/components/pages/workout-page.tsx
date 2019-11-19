import * as React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { WorkoutMutatorState } from "../../state/types";
import { getWorkout } from "../../state/actions/workout-actions";
import ListItem from "../list-item";
import CompletableGoal from "../completable-goal";

const WorkoutPage : React.FC = () => {
    const { id } = useParams();
    const idNum = id as unknown as number;
    const dispatch = useDispatch();
    const workout = useSelector(
        (state: { workoutMutator: WorkoutMutatorState }) => (
            state.workoutMutator.workout
        ));
    const [editing, setEditing] = React.useState(true);

    React.useEffect(() => {
        dispatch(getWorkout(idNum));
    }, []);

    const goalDoubleClickHandler = (complete: boolean) => {
        if(editing) {
            setEditing(false);
        }
    }

    const playClickHandler = () => {
        setEditing(!editing);
    }

    return workout && (
        <div>
            <div className="flex flex-row justify-between">
                <span>{workout.name}</span>
                <span>
                    <button onClick={playClickHandler}>{editing ? "EDITING": "PLAYING"}</button>
                </span>
            </div>
            {workout.exercises.map(w => (
                <ListItem 
                    key={w.id}
                    title={w.name}
                    contentRender={() => (
                        <div className="flex flex-row">
                            {w.goals.map(g => (
                                <CompletableGoal 
                                    key={g.id} 
                                    goal={g} 
                                    completable={!editing}
                                    onDoubleClick={goalDoubleClickHandler}
                                />
                            ))}
                        </div>
                    )}
                />
            ))}
        </div>
    );
}

export default WorkoutPage;