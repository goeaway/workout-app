import * as React from "react";
import { Exercise } from "../types";
import ListItem from "./list-item";
import CompletableGoal from "./completable-goal";

export interface CompletableExerciseProps {
    exercise: Exercise;
    editing: boolean;
    onComplete: (id: number) => void;
    onGoalDoubleClick: (complete: boolean) => void;
}

const CompletableExercise : React.FC<CompletableExerciseProps> = ({ exercise, editing, onGoalDoubleClick }) => {
    const [complete, setComplete] = React.useState(false);

    const goalCompleteHandler = (id: number) => {

    }

    return (
        <ListItem 
            key={exercise.id}
            title={exercise.name}
            contentRender={() => (
                <div className="flex flex-row">
                    {exercise.goals.map(g => (
                        <CompletableGoal 
                            key={g.id} 
                            goal={g} 
                            completable={!editing}
                            onComplete={goalCompleteHandler}
                            onDoubleClick={onGoalDoubleClick}
                        />
                    ))}
                </div>
            )}
        />
    )
}

export default CompletableExercise;