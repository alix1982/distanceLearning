import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainAdminProgrammPoint } from "./mainAdminProgrammPoint/MainAdminProgrammPoint";
import { MainAdminProgrammCard } from "./mainAdminProgrammCard/MainAdminProgrammCard";
import { receivingProgramms } from "../../store/slice/programmSlice";

function MainAdminProgramm() {
    const dispatch = useDispatch();


    const { programmCard, errorReceivingProgramms, isLoadingProgramms } = useSelector(state => state.programmSlice);

    const [activeProgramm, setActiveProgramm] = useState({});
    const {programms} = useSelector(state => state.programmSlice);

    useEffect(()=>{
        dispatch(receivingProgramms());
    },[]);
    
    useEffect(()=>{
        setActiveProgramm(programms?.find((item)=>item._id === programmCard?._id))
    },[programmCard]);

    return (
        <main className="mainAdminProgramm">
            {/* <p>Страница в разработке</p> */}
            {errorReceivingProgramms.length > 0 ? <p>{errorReceivingProgramms}</p> :
                (isLoadingProgramms ? <p>Загрузка ...</p> :
                    <ol className='mainAdminProgramm__list'>
                        {programms ? programms.map((programm, index)=>
                            <MainAdminProgrammPoint key={index}
                                programm={programm}
                                activeProgramm={activeProgramm}
                            />
                        ) : <p>Программы не найдены</p>}
                    </ol>  
                )
            } 
            <MainAdminProgrammCard />

        </main>
    )
}

export default MainAdminProgramm;