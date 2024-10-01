// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import arrowProgrammOpen from "../../../image/programm/arrowProgrammOpen.svg";
// import arrowProgrammClose from "../../../image/programm/arrowProgrammClose.svg";


function ProgrammThema({prog, numberBlock, isOpenBlock, setIsOpenBlock, setThema}) {

    // const handleOpenProgramm = () => {
    //     console.log(prog);
    //     let arr = [false, false, false];
    //     arr[numberBlock] = !isOpenBlock[numberBlock];
    //     setIsOpenBlock(arr);
    // }
 
    return (
        <li className='ProgrammThema'>
            <h2 className='ProgrammThema__heading'>{prog.heading}</h2>
            
        </li>

    )
}

export default ProgrammThema;