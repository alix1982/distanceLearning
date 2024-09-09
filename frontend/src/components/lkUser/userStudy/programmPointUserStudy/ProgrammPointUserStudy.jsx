import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { programmsFront } from "../../../share/constantProgramm";
import { receivingGroup, setProgramm } from "../../../store/slice/userSlice";

function ProgrammPointUserStudy({group}) {

    const navigate = useNavigate();
    const dispath = useDispatch();

    const handleProgramm = () => {
        // dispath(receivingGroup(group.group));
        dispath(setProgramm(group));
        navigate('/programm');
    }

    return (
        <li className='programmPointUserStudy'>
            {programmsFront.find((item)=> item.name === group.programm.name) ?
                <button className='programmPointUserStudy__button' onClick={handleProgramm}>
                    {programmsFront.find((item)=> item.name === group.programm.name).heading}
                </button> :
                console.log('Программы нет на фронте')
            }
        </li>
    )
}

export default ProgrammPointUserStudy;