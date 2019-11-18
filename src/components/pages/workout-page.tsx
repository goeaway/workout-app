import * as React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { WorkoutMutatorState } from "../../state/types";
import { getWorkout } from "../../state/actions/workout-actions";
import ListItem from "../list-item";

const WorkoutPage : React.FC = () => {
    const { id } = useParams();
    const idNum = id as unknown as number;
    const dispatch = useDispatch();
    const workout = useSelector((state: { workoutMutator: WorkoutMutatorState }) => {
        return state.workoutMutator.workout;
    });

    React.useEffect(() => {
        dispatch(getWorkout(idNum));
    }, []);
    
    return workout && (
        <div>
            <span>{workout.name}</span>
            {workout.exercises.map(w => (
                <ListItem 
                    key={w.id}
                    title={w.name}
                    contentRender={() => (
                        <ul>
                            {w.goals.map(g => (
                                <li key={g.id}>{g.reps} @ {g.weight}</li>
                            ))}
                        </ul>
                    )}
                />
            ))}
        </div>
    );
}

export default WorkoutPage;