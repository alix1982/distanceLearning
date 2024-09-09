import { useDispatch } from "react-redux";
import { setProgrammCard } from "../../../store/slice/programmSlice";

export const MainAdminProgrammPoint = ({programm, activeProgramm }) => {
    
    const dispatch = useDispatch();

     const handleActiveProgramm = () => {
        dispatch(setProgrammCard(programm));
    }

    return (
        <li className={
            `mainAdminProgrammPoint
            ${programm?._id === activeProgramm?._id ? 'mainAdminProgrammPoint_active' : ''}
            ${programm.applies ? 'mainAdminProgrammPoint_createUser' : ''}
            `
        }>
            <button
                className={`mainAdminProgrammPoint__button ${programm.applies && 'mainAdminProgrammPoint_createUser'}`}
                onClick={handleActiveProgramm}
            >
                {`
                    ${programm.name},
                    ${programm.applies ? "используется" : ""},
                `}   
            </button>
        </li>

    )
}


