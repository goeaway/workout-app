import * as React from "react";
import { Workout } from "../types";
import { useHistory } from "react-router-dom";

export interface WorkoutListItemProps {
    workout: Workout;
}

const WorkoutListItem: React.FC<WorkoutListItemProps> = ({ workout }) => {
    const history = useHistory();

    const clickHandler = () => {
        history.push(`/workout/${workout.id}`);
    }

    return (
        <div className="p-6 m-6 bg-white rounded-lg shadow-xl hover:shadow-lg" onClick={clickHandler}>
            <div className="font-bold text-lg">{workout.name}</div>
            <ul>
                {workout.exercises.map(e => (
                    <li className="font-normal text-gray-600" key={e.id}>{e.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkoutListItem;