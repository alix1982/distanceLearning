// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import arrowProgrammOpen from "../../../image/programm/arrowProgrammOpen.svg";
import arrowProgrammClose from "../../../image/programm/arrowProgrammClose.svg";
import { useDispatch, useSelector } from "react-redux";
// import { setIsThemaReset } from "../../store/slice/programmUserSlice";

function ProgrammPoint({prog, progData, numberBlock, isOpenBlock, setIsOpenBlock, setThemaRender, setBlockRender}) {
    
    const {groupUserStudy} = useSelector(state => state.userSlice);
    // console.log(groupUserStudy)
    const {blocks} = groupUserStudy?.programm;
    // console.log(blocks)
    const dispatch = useDispatch();
    const handleOpenBlock = () => {
        let arr = isOpenBlock.length > 0 ? [...Array(isOpenBlock.length)].fill(false) : [];
        arr[numberBlock - 1] = !isOpenBlock[numberBlock - 1];
        const xxx = arr.findIndex((item)=>item === true)
        setIsOpenBlock(arr);
        const blockrenderSetting = (xxx === -1) ? 1 : (xxx + 1);
        setBlockRender(blockrenderSetting);
        setThemaRender(xxx === -1 ? 0 : 1);
        // navigate(`/${prog.name}`)
    }

    const disebledButton = (item, index) => {
        let status = false;

        // разблокируем тестирование когда пройдена последняя тема
        if (item === 'Тестирование') {
            return !progData[`thema${index}`].passed
        };

        // разблокируем литературу в первом блоке и когда пройден тест в предыдущем блоке
        // if(item === 'Список литературы') {return blocks[`block${numberBlock}`].test.passed};
        if(item === 'Список литературы' && numberBlock === 1) {return false};
        if (item === 'Список литературы' && numberBlock !== 1) {
            return !blocks[`block${numberBlock-1}`].test.passed
        };

        // разблокируем первую тему в первом блоке и когда пройден тест в предыдущем блоке
        if (progData[`thema${index+1}`]?.name === 'thema1' && numberBlock !== 1) {
            return !blocks[`block${numberBlock-1}`].test.passed
        };
        if (progData[`thema${index+1}`]?.name === 'thema1' && numberBlock === 1) {return false};

        // разблокируем темы (кроме первой) когда пройдена предыдущая
        if (!(item === 'Список литературы' || item === 'Тестирование')) {
            return !progData[`thema${index}`].passed;
        }

        return status;
    }

    return (
        <li className='programmPoint'>
            <h2 className='programmPoint__heading'>{prog.heading}</h2>
            <button className='programmPoint__arrowButton' onClick={handleOpenBlock}>
                <img src={isOpenBlock[numberBlock-1] ? arrowProgrammClose : arrowProgrammOpen} className="programmPoint__arrow" alt="arrow"/>
            </button>
            {isOpenBlock[numberBlock-1] &&
                prog.themes.map((item, index) => 
                    <button
                        className={
                            `programmPoint__themaButton
                            ${item === 'Список литературы' ? 'programmPoint__literatureButton' : ''}`
                        }
                        onClick={()=>setThemaRender(index+1)}
                        disabled={disebledButton(item, index)}
                        key={index}
                    >
                        {item}
                    </button>
                )
            }
        </li>

    )
}

export default ProgrammPoint;