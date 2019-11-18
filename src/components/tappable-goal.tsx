import * as React from "react";
import { Goal } from "../types";

export interface TappableGoalProps {
    goal: Goal;
}

const TappableGoal : React.FC<TappableGoalProps> = ({ goal }) => {
    const [complete, setComplete] = React.useState(goal.complete);

    const handleClick = () => {
        setComplete(!complete);
    }

    return (
        <div className="flex flex-col" onClick={handleClick}>
            <span>{goal.reps}</span>
            <span>@</span>
            <span>{goal.weight} KG</span>
        </div>
    );
}

export default TappableGoal;