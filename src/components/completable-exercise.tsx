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
    const [completeGoals, setComplleteGoals] = React.useState([] as Array<number>);

    const goalCompletionChangedHandler = (id: number, complete: boolean) => {
        const isIn = completeGoals.includes(id);

        if(isIn && !complete){
            
        }
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
                            onCompletionChanged={goalCompletionChangedHandler}
                            onDoubleClick={onGoalDoubleClick}
                        />
                    ))}
                </div>
            )}
        />
    )
}

export default CompletableExercise;