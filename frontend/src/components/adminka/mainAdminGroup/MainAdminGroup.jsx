import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainAdminGroupPoint } from "./mainAdminGroupPoint/MainAdminGroupPoint";
import { MainAdminGroupCard } from "./mainAdminGroupCard/MainAdminGroupCard";
import { receivingGroups } from "../../store/slice/groupSlice";

function MainAdminGroup() {
    const dispatch = useDispatch();

    const { groupCard, errorReceivingGroups, isLoadingGroups } = useSelector(state => state.groupSlice);

    const [activeGroup, setActiveGroup] = useState({});
    const {groups} = useSelector(state => state.groupSlice);
    // console.log(groups)
    useEffect(()=>{
        dispatch(receivingGroups());
    },[]);

    useEffect(()=>{
        setActiveGroup(groups?.find((item)=>item._id === groupCard?._id))
    },[groupCard]);

    return (
        <main className="mainAdminGroup">
            {/* <p>Страница в разработке</p> */}
            {errorReceivingGroups.length > 0 ? <p>{errorReceivingGroups}</p> :
                (isLoadingGroups ? <p>Загрузка ...</p> :
                    <ol className='mainAdminGroup__list'>
                        {groups ? groups.map((group, index)=>
                            <MainAdminGroupPoint key={index}
                                group={group}
                                activeGroup={activeGroup}
                            />
                        ) : <p>Программы не найдены</p>}
                    </ol>  
                )
            } 
            <MainAdminGroupCard />

        </main>
    )
}

export default MainAdminGroup;