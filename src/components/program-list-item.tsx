import * as React from "react";
import { Program } from "../types";
import { useHistory } from "react-router-dom";

export interface ProgramListItemProps {
    program: Program;
}

const ProgramListItem: React.FC<ProgramListItemProps> = ({ program }) => {
    const history = useHistory();

    const clickHandler = () => {
        history.push(`/program/${program.id}`);
    }

    return (
        <div className="p-5 m-6 cursor-pointer bg-white rounded-lg shadow-xl hover:bg-gray-100" onClick={clickHandler}>
            <div className="flex justify-between">
                <span className="font-bold text-lg">{program.name}</span>
                <span className="text-gray-500">{program.commences.toDateString()}</span>
            </div>
            <ul>
                {program.weeks.map(w => (
                    <li className="font-normal text-gray-500" key={w.id}>
                        <div>{w.commences.toDateString()}</div>
                        <div>Days {w.workDays}</div>
                        <div>{w.workouts.map(wo => <span key={wo.id} className="pr-1">{wo.name}</span>)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProgramListItem;