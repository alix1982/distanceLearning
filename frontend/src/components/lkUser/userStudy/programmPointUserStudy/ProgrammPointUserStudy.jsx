// import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProgramm } from "../../../store/slice/programmSlice";

function ProgrammPointUserStudy({prog}) {

    const navigate = useNavigate();
    const dispath = useDispatch();

    const handleProgramm = () => {
        console.log(prog);
        dispath(setProgramm(prog.id));
        navigate(`/${prog.name}`);
    }
 
    return (
        <li className='programmPointUserStudy'>
            <button className='programmPointUserStudy__button' onClick={handleProgramm}>
                {prog.heading}
            </button>
        </li>

    )
}

export default ProgrammPointUserStudy;