// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import arrowProgrammOpen from "../../../image/programm/arrowProgrammOpen.svg";
import arrowProgrammClose from "../../../image/programm/arrowProgrammClose.svg";
import { useDispatch, useSelector } from "react-redux";
import { setBlock } from "../../store/slice/programmSlice";


function ProgrammPoint({prog, numberBlock, isOpenBlock, setIsOpenBlock, setThema, userThema, programmState}) {

    const dispatch = useDispatch();
    // const {programm} = useSelector(state => state.userSlice?.userData?.user)
    // console.log(userThema)
    // const navigate = useNavigate();
    // const [isOpenBlock, setIsOpenBlock] = useState(false);
    // const [thema, setThema] = useState(1);

    const handleOpenProgramm = () => {
        // console.log(prog);
        let arr = [false, false, false];
        arr[numberBlock] = !isOpenBlock[numberBlock];
        setIsOpenBlock(arr);
        setThema(1)
        dispatch(setBlock(numberBlock))
        // navigate(`/${prog.name}`)
    }
    // console.log(programmState)
    const disebledButton = (item, index) => {
        let status = false;
        status = numberBlock === 0 ?
            ((item === 'Список литературы' || index === 0) ? false : (!userThema[`thema${index}`]?.passed)) :
            (numberBlock !== 0 &&
                programmState[`block${numberBlock}`].test.passed && 
                    (item === 'Список литературы' || index === 0) ? false : (!userThema[`thema${index}`]?.passed))
        return status;
            

            
        // item === 'Список литературы' && index === 0 ? false : (!userThema[`thema${index+1}`]?.passed)
        // index === 0 && return false;

        // return item !== 'Список литературы' ? (!userThema[`thema${index+1}`]?.passed) : false
    }
    // console.log(userThema[`thema${1}`].passed)
    return (
        <li className='programmPoint'>
            <h2 className='programmPoint__heading'>{prog.heading}</h2>
            <button className='programmPoint__arrowButton' onClick={handleOpenProgramm}>
                <img src={isOpenBlock[numberBlock] ? arrowProgrammOpen : arrowProgrammClose} className="programmPoint__arrow" alt="arrow"/>
            </button>
            {isOpenBlock[numberBlock] &&
                prog.themes.map((item, index) => {
                    // console.log(userThema)
                    return (
                        <button
                            className={
                                `programmPoint__themaButton
                                ${item === 'Список литературы' ? 'programmPoint__literatureButton' : ''}`
                            }
                            onClick={()=>setThema(index+1)}
                            disabled={disebledButton(item, index)}
                            key={index}
                        >
                            {item}
                        </button>
                    )
                }
            )}
            {/* {isOpenBlock[numberBlock] && 
                <button className='programmPoint__literatureButton' onClick={()=>setThema(1)}>
                    Список литературы
                </button>
            } */}
            
        </li>

    )
}

export default ProgrammPoint;