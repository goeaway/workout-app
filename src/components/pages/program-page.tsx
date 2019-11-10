import * as React from "react";
import { useParams } from "react-router-dom";

const ProgramPage : React.FC = () => {
    const { id } = useParams();

    return (
        <div>{id}</div>
    );
}

export default ProgramPage;