import * as React from "react";
import { Goal } from "../types";
import ClassBuilder from "../utils/class-builder";

export interface CompletableGoalProps {
    goal: Goal;
    completable: boolean;
    onDoubleClick: (complete: boolean) => void;
    onComplete: (id: number) => void;
}

const CompletableGoal : React.FC<CompletableGoalProps> = ({ goal, completable, onDoubleClick, onComplete }) => {
    const [complete, setComplete] = React.useState(goal.complete);

    React.useEffect(() => {
        if(!completable && complete) {
            setComplete(false);
        }
    }, [completable]);

    const handleClick = () => {
        if(completable) {
            setComplete(!complete);
            onComplete(goal.id);
        } else {
            // todo add callback so workout page can open modal to edit
        }
    }

    const handleDoubleClick = () => {
        if(!completable) {
            setComplete(!complete);
            onDoubleClick(complete);
        }
    }

    const classes = {
        goal: ClassBuilder
            .Start()
            .Append("goal")
            .AppendIfElse("bg-red-300", "bg-blue-300", complete)
            .Build()
    };

    return (
        <div className={classes.goal} onClick={handleClick} onDoubleClick={handleDoubleClick}>
            <span>{goal.reps}</span>
            <span>@</span>
            <span>{goal.weight} KG</span>
        </div>
    );
}

export default CompletableGoal;