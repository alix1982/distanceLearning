import { useEffect, useState } from 'react';
import { programmsFront } from '../share/constantProgramm';
import ProgrammPoint from './programmPoint/ProgrammPoint';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProgramm } from '../store/slice/userSlice';
import ThemaRenderPdf from '../share/themaRenderPdf/ThemaRenderPdf';
// import Test11 from '../share/programmsContent/programm1/test1/test11/Test11';
// import TestStart11 from '../share/programmsContent/programm1/test1/testStart1/1/TestStart11';
import TestStart1 from '../share/programmsContent/programm1/test1/testStart1/TestStart1';

function Programms() {
    const {groupUserStudy, isStartThema, isEndThema, groups} = useSelector(state => state.userSlice)
    
    const [isOpenBlock, setIsOpenBlock] = useState([]); // открытие и закрытие блоков [false, true, false, ...]
    const [themaRender, setThemaRender] = useState(0);
    const [blockRender, setBlockRender] = useState(0);
    const [programmGroupFront, setProgrammGroupFront] = useState({});

    useEffect(()=>{
        setProgrammGroupFront(programmsFront.find((item)=> item.name === groupUserStudy.programm.name))
    },[groupUserStudy])
  
     const dispatch = useDispatch();

    // срабатывание обсервера в начале(отправка даты на сервер) и в конце чтения темы(отправка даты и статуса темы на серве), 
    useEffect(()=>{
        if (blockRender > 0 && themaRender > 0) {
            if (isStartThema && !isEndThema &&  groupUserStudy.programm.blocks[`block${blockRender}`][`thema${themaRender}`].timestart === 0) {
                dispatch(updateUserProgramm({
                    id: groupUserStudy.group,
                    thema: themaRender,
                    block: blockRender,
                    keyChange: 'start'
                }));  
            };
            if (isEndThema && groupUserStudy.programm.blocks[`block${blockRender}`][`thema${themaRender}`].passed === false) {
                dispatch(updateUserProgramm({
                    id: groupUserStudy.group,
                    thema: themaRender,
                    block: blockRender,
                    keyChange: 'end'
                }));  
            };
        }
    },[isStartThema, isEndThema]);

    // создание массива открытия блоков с количеством равному блокам выбранной программы
    useEffect(()=>{
        const arr = programmGroupFront.structure ? [...Array(programmGroupFront?.structure.length)].fill(false) : [];
        setIsOpenBlock(arr)    
    },[programmGroupFront]);

    // console.log(themaRender); // номер выбранной темы из useState
    // console.log(blockRender);
    // console.log(isStartThema);
    // console.log(isEndThema);
    console.log(groupUserStudy);
    // console.log(programmGroupFront);
    // console.log(groups);
    // blockrender > 1 && groupUserStudy.programm.blocks[`block${blockRender - 1}`].test.passed

    return (
        <>
            <section>
                {groupUserStudy.programm.startTest.passed ?
                    <>
                        <h3 className='programm'>{programmGroupFront.text}</h3>
                        <p className='programm__heading'>{programmGroupFront.heading}</p>
                        <ul className='programm__list'>
                            {programmGroupFront.structure && programmGroupFront.structure.map((item, index) => 
                                <ProgrammPoint
                                    key={item.idBlock}
                                    prog={item}
                                    progData = {groupUserStudy.programm.blocks[`block${index+1}`]}
                                    numberBlock={item.idBlock}
                                    isOpenBlock={isOpenBlock} setIsOpenBlock={setIsOpenBlock}
                                    setThemaRender={setThemaRender} setBlockRender={setBlockRender}
                                />
                            )}
                            <li className='programm__access'>Доступ 
                                <span className='programm__accessOpen'>
                                    Открыт с 17.05.2024.
                                </span>
                            </li>
                        </ul> 
                    </>
                    :
                    <>
                        <h3 className='programm'>Входное тестирование</h3>
                        <TestStart1/>
                    </>
                
                }
                
            </section>

            {(programmGroupFront?.structure?.length > 0 && themaRender !== 0) &&
                (blockRender === 1 ?
                    <section className='programmContent'>
                        <h1 className='programmContent__heading'>{programmGroupFront?.structure[blockRender-1].themes[themaRender-1]}</h1>
                        <div className='programmContent__content'>
                            {/* <ThemaRenderPdf pdf={programmGroupFront?.structure[blockRender-1].themesContent[themaRender-1]} /> */}
                            {programmGroupFront?.structure[blockRender-1].themesContent[themaRender-1] }
                        </div>
                    </section> :
                    (blockRender > 1 && groupUserStudy.programm.blocks[`block${blockRender - 1}`].test.passed && 
                        <section className='programmContent'>
                            <h1 className='programmContent__heading'>{programmGroupFront?.structure[blockRender-1].themes[themaRender-1]}</h1>
                            <div className='programmContent__content'>
                                {/* <ThemaRenderPdf pdf={programmGroupFront?.structure[blockRender-1].themesContent[themaRender-1]} /> */}
                                {programmGroupFront?.structure[blockRender-1].themesContent[themaRender-1] }
                            </div>
                        </section>
                    )
                )
            }
        </>
    )
}

export default Programms;
