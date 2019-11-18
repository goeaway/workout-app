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

export interface AppProps {
}

const App: React.FC<AppProps> = () => {
    const runningWorkout = useSelector((state: { runningWorkoutMutator: RunningWorkoutMutatorState}) => state.runningWorkoutMutator.workout);
    const isRunning = useSelector((state: { runningWorkoutMutator: RunningWorkoutMutatorState}) => state.runningWorkoutMutator.isRunning);

    return (
        <Router>
            <div className="workout-app bg-red-200">
                <div className="flex justify-between ml-6 mr-6 font-semibold">
                    <Link className="hover:text-gray-700" to="/">Workouts</Link>
                    <Link className="hover:text-gray-700" to="/progress">Progress</Link>
                    <Link className="hover:text-gray-700" to="/share">Share</Link>
                    <Link className="hover:text-gray-700" to="/calculator">Strength Calculator</Link>
                </div>
                {isRunning &&
                    <div className="p-5 m-6 cursor-pointer bg-green-400 rounded-lg shadow-xl hover:bg-gray-100">
                        Currently Running {runningWorkout.name}. Click to go
                    </div>
                }
                <div className="h-full overflow-y-auto">
                    <Route exact path="/" component={WorkoutsPage} />
                    <Route path="/program/:id" component={ProgramPage} />
                    <Route path="/workout/:id" component={WorkoutPage} />
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