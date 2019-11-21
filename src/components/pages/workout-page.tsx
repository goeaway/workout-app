import * as React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { WorkoutMutatorState } from "../../state/types";
import { getWorkout } from "../../state/actions/workout-actions";
import ListItem from "../list-item";
import CompletableGoal from "../completable-goal";
import CompletableExercise from "../completable-exercise";

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

    const exerciseCompleteHandler = (id: number) => {

    }

    return workout && (
        <div>
            <div className="flex flex-row justify-between">
                <span>{workout.name}</span>
                <span>
                    <button onClick={playClickHandler}>{editing ? "EDITING": "PLAYING"}</button>
                </span>
            </div>
            {workout.exercises.map(e => <CompletableExercise 
                key={e.id}
                editing={editing}
                exercise={e}
                onGoalDoubleClick={goalDoubleClickHandler}
                onComplete={exerciseCompleteHandler}
            />)}
        </div>
    );
}

export default WorkoutPage;