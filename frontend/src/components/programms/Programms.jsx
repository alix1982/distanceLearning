import { useEffect, useState } from 'react';
import { programmBlock, programmName } from '../share/constantProgramm';
import ProgrammPoint from './programmPoint/ProgrammPoint';
import { useDispatch, useSelector } from 'react-redux';

import Thema111 from '../share/programmsContent/programm1/thema11/thema111/Thema111';
import Thema112 from '../share/programmsContent/programm1/thema11/thema112/Thema112';
import Thema113 from '../share/programmsContent/programm1/thema11/thema113/Thema113';
import Literature11 from '../share/programmsContent/programm1/literature/Literature';
import ProgrammDev from '../share/programmsContent/programmDev/ProgrammDev';
// import Test1 from '../share/programmsContent/programm1/test1/Test1';
import Thema121 from '../share/programmsContent/programm1/thema12/thema121/Thema121';
import Thema122 from '../share/programmsContent/programm1/thema12/thema122/Thema122';
import Thema123 from '../share/programmsContent/programm1/thema12/thema123/Thema123';
import Thema131 from '../share/programmsContent/programm1/thema13/thema131/Thema131';
import Thema132 from '../share/programmsContent/programm1/thema13/thema132/Thema132';
import Thema133 from '../share/programmsContent/programm1/thema13/thema133/Thema133';
import Test11 from '../share/programmsContent/programm1/test1/test11/Test11';
import Test12 from '../share/programmsContent/programm1/test1/test12/Test12';
import Test13 from '../share/programmsContent/programm1/test1/test13/Test13';
import { updateUserProgramm } from '../store/slice/userSlice';
// import useObserver from '../share/customHook/useObserver';
// import { updateUserProgramm } from '../store/slice/userSlice';

function Programms() {
    const {programmUserStudy, blockUserStudy} = useSelector(state => state.programmSlice);
    const {programm} = useSelector(state => state.userSlice?.userData?.user)
    // console.log(programm)
    const [programmState, setProgrammState] = useState(programm[`programm${programmUserStudy}`]);
    const [isOpenBlock, setIsOpenBlock] = useState([false, false, false]);
    const [thema, setThema] = useState(0);
    const [programmNameUser, setProgrammNameUser] = useState({});
    const [programmBlockUser, setProgrammBlockUser] = useState([]);
    const [userThema, setUserThema] = useState({});
    const [isStartThema, setIsStartThema] = useState(false);
    const [isEndThema, setIsEndThema] = useState(false);

    const dispatch = useDispatch();
    // const {show} = useObserver('startThema')

    const renderThema = () => {
        switch (programmUserStudy) {
            case 1:
                switch (blockUserStudy) {
                    case 1:
                        switch (thema) {
                            case 1:
                                return <Thema111 setIsStartThema={setIsStartThema} setIsEndThema={setIsEndThema}/>
                            case 2:
                                return <Thema112 setIsStartThema={setIsStartThema} setIsEndThema={setIsEndThema} />
                            case 3:
                                return <Thema113 setIsStartThema={setIsStartThema} setIsEndThema={setIsEndThema} />
                            case 4:
                                return <Test11
                                    setIsOpenBlock={setIsOpenBlock} setThema={setThema}
                                    programmState={programmState} setProgrammState={setProgrammState}
                                />
                            case 5:
                                return <Literature11 />
                            default:
                                return <ProgrammDev />
                        }
                    case 2:
                        switch (thema) {
                            case 1:
                                return <Thema121 setIsStartThema={setIsStartThema} setIsEndThema={setIsEndThema}/>
                            case 2:
                                return <Thema122 setIsStartThema={setIsStartThema} setIsEndThema={setIsEndThema}/>
                            case 3:
                                return <Thema123 setIsStartThema={setIsStartThema} setIsEndThema={setIsEndThema}/>
                            case 4:
                                return <Test12
                                    setIsOpenBlock={setIsOpenBlock} setThema={setThema}
                                    programmState={programmState} setProgrammState={setProgrammState}
                                />
                            case 5:
                                return <Literature11 />
                            default:
                                return <ProgrammDev />
                        }
                    case 3:
                        switch (thema) {
                            case 1:
                                return <Thema131 setIsStartThema={setIsStartThema} setIsEndThema={setIsEndThema}/>
                            case 2:
                                return <Thema132 setIsStartThema={setIsStartThema} setIsEndThema={setIsEndThema}/>
                            case 3:
                                return <Thema133 setIsStartThema={setIsStartThema} setIsEndThema={setIsEndThema}/>
                            case 4:
                                return <Test13
                                    setIsOpenBlock={setIsOpenBlock} setThema={setThema}
                                    programmState={programmState} setProgrammState={setProgrammState}
                                />
                            case 5:
                                return <Literature11 />    
                            default:
                                return <ProgrammDev />
                        }
                    default:
                        return <ProgrammDev />
                }
                case 2:
                    switch (blockUserStudy) {
                        case 1:
                            switch (thema) {
                                case 1:
                                    return <ProgrammDev />
                                case 2:
                                    return <ProgrammDev />
                                case 3:
                                    return <ProgrammDev />
                                default:
                                    return <ProgrammDev />
                            }
                        case 2:
                            switch (thema) {
                                case 1:
                                    return <ProgrammDev />
                                case 2:
                                    return <ProgrammDev />
                                case 3:
                                    return <ProgrammDev />
                                default:
                                    return <ProgrammDev />
                            }
                        case 3:
                            switch (thema) {
                                case 1:
                                    return <ProgrammDev />
                                case 2:
                                    return <ProgrammDev />
                                case 3:
                                    return <ProgrammDev />
                                default:
                                    return <ProgrammDev />
                            }
                        default:
                            return <ProgrammDev />
                    }
                case 3:
                    switch (blockUserStudy) {
                        case 1:
                            switch (thema) {
                                case 1:
                                    return <ProgrammDev />
                                case 2:
                                    return <ProgrammDev />
                                case 3:
                                    return <ProgrammDev />
                                default:
                                    return <ProgrammDev />
                            }
                        case 2:
                            switch (thema) {
                                case 1:
                                    return <ProgrammDev />
                                case 2:
                                    return <ProgrammDev />
                                case 3:
                                    return <ProgrammDev />
                                default:
                                    return <ProgrammDev />
                            }
                        case 3:
                            switch (thema) {
                                case 1:
                                    return <ProgrammDev />
                                case 2:
                                    return <ProgrammDev />
                                case 3:
                                    return <ProgrammDev />
                                default:
                                    return <ProgrammDev />
                            }
                        default:
                            return <ProgrammDev />
                        }
            default:
                return <ProgrammDev />
        } 
    }

    const changeProgramm = () => {
        let data = {...programmState};
        let dataBlock = {...data[`block${blockUserStudy}`]};
        let dataThema = {...dataBlock[`thema${thema}`]};
        if (isStartThema) {
            dataThema.timestart = new Date().getTime();
            dataBlock[`thema${thema}`] = dataThema;
            data[`block${blockUserStudy}`] = dataBlock;
            setProgrammState(data);
        }
        if (isEndThema) {
            dataThema.timeend = new Date().getTime();
            dataThema.passed = true;
            dataBlock[`thema${thema}`] = dataThema;
            data[`block${blockUserStudy}`] = dataBlock;
            setProgrammState(data);
        }
    }

    // отправка изименений в прогрессе обучения пользователя на сервер
    useEffect(()=>{
        programmState !== programm[`programm${programmUserStudy}`] &&
            dispatch(updateUserProgramm({ id: programmUserStudy, programm: programmState }))
    },[programmState]);

    // срабатывание обсервера в начале(отправка даты на сервер) и в конце чтения темы(отправка даты и статуса темы на серве), 
    useEffect(()=>{
        changeProgramm();
    },[isStartThema, isEndThema]);

    useEffect(()=> {
        let progUser = {};
        progUser = programmName.find((item)=>item.id === programmUserStudy);
        setProgrammNameUser(progUser);
    },[programmUserStudy]);

    useEffect(()=> {
        programmState &&
            setUserThema(programmState[`block${blockUserStudy}`]);
    },[programmUserStudy, blockUserStudy, programmState]);

    useEffect(()=> {
        let progBlock = {};
        progBlock = programmBlock[programmUserStudy-1]
        // programmName.find((item)=>item.id === programmUserStudy);
        setProgrammBlockUser(progBlock)
    },[programmNameUser]);

    // console.log(programmUserStudy); // номер выбранной программы из слайса
    // console.log(blockUserStudy); // номер выбранного блока программы из слайса
    
    // console.log(programmState) // обьект программы со временем прохождения программы и статусом из useState
    // console.log(programmNameUser) // обьект с названием программы из useState
    // console.log(programmBlockUser) // массив содержания программы с блоками и входящими в них темами из useState
    // console.log(thema); // номер выбранной темы из useState


    return (
        <>
            <section>
                <h3 className='programm'>{programmNameUser.text}</h3>
                <p className='programm__heading'>{programmNameUser.heading}</p>
                <ul className='programm__list'>
                    {programmBlockUser.map((item, index) => 
                        <ProgrammPoint
                            key={item.id}
                            prog={item}
                            numberBlock={index}
                            isOpenBlock={isOpenBlock} setIsOpenBlock={setIsOpenBlock}
                            setThema={setThema}
                            userThema={userThema}
                            programmState={programmState}
                        />
                    )}
                    <li className='programm__access'>Доступ 
                        <span className='programm__accessOpen'>
                            Открыт с 17.05.2024.
                        </span>
                    </li>
                </ul>
            </section>

            {(programmBlockUser.length > 0 && thema !== 0) &&
                <section className='programmContent'>
                    <h1 className='programmContent__heading'>{programmBlockUser[blockUserStudy-1].themes[thema-1]}</h1>
                    <div className='programmContent__content'>
                        {renderThema()}
                    </div>
                </section>
            }
        </>
    )
}

export default Programms;
