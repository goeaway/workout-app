import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import WorkoutsPage from "./pages/workouts-page";
import ProgressPage from "./pages/progress-page";
import SharePage from "./pages/share-page";
import CalculatorPage from "./pages/calculator-page";
import WorkoutPage from "./pages/workout-page";
import ProgramsPage from "./pages/programs-page";
import ProgramPage from "./pages/program-page";
import { useSelector } from "react-redux";
import { RunningWorkoutMutatorState } from "../state/types";
import "../styles/colours.css";
import ExercisePage from "./pages/exercise-page";

export interface AppProps {
}

const App: React.FC<AppProps> = () => {
    const runningWorkout = useSelector((state: { runningWorkoutMutator: RunningWorkoutMutatorState}) => state.runningWorkoutMutator.workout);
    const isRunning = useSelector((state: { runningWorkoutMutator: RunningWorkoutMutatorState}) => state.runningWorkoutMutator.isRunning);

    return (
        <Router>
            <div className="bg-blue-200 flex w-full">
                <div className="flex flex-col bg-white font-semibold p-2">
                    <Link className="hover:text-gray-700 p-1" to="/">Workouts</Link>
                    <Link className="hover:text-gray-700 p-1" to="/progress">Progress</Link>
                    <Link className="hover:text-gray-700 p-1" to="/share">Share</Link>
                    <Link className="hover:text-gray-700 p-1" to="/calculator">Strength Calculator</Link>
                </div>
                {isRunning &&
                    <div className="p-5 m-6 cursor-pointer bg-green-400 rounded-lg shadow-xl hover:bg-gray-100">
                        Currently Running {runningWorkout.name}. Click to go
                    </div>
                }
                <div className="h-full w-full overflow-y-auto p-6">
                    <Route exact path="/" component={WorkoutsPage} />
                    <Route path="/program/:id" component={ProgramPage} />
                    <Route path="/workout/:id" component={WorkoutPage} />
                    <Route path="/exercise/:id" component={ExercisePage} />
                    <Route path="/workouts" component={WorkoutsPage} />
                    <Route path="/progress" component={ProgressPage} />
                    <Route path="/share" component={SharePage} />
                    <Route path="/calculator" component={CalculatorPage} />
                </div>
            </div>
        </Router>
    );
}

export default App;