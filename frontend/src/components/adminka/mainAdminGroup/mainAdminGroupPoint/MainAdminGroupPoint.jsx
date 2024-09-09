import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroupCard } from "../../../store/slice/groupSlice";
import { calcDate } from "../../../share/constant";

export const MainAdminGroupPoint = ({group, activeGroup }) => {
    
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.userSlice);

    const [usersGroupSort, setUsersGroupSort] = useState([]); // обьекты включенных в группу пользователей
    const sortUSerGroup = () => {
        let xxx = [];
        users?.map((user) => 
            user.education.map((item)=>
                (item.group === group._id) && (xxx = [...xxx, user])
            )
        );
        setUsersGroupSort(xxx)
    }
    useEffect(()=>{
        sortUSerGroup();
    },[activeGroup]);

    const calcStartDate = () => {
        return (new Date(group.dateStart*1000))
    }
    const calcEndDate = () => {
        return (new Date(group.dateEnd*1000))
    }
    const handleActiveGroup = () => {
        dispatch(setGroupCard(group));
    }
    // console.log(users);
    // console.log(group)
    // console.log(usersGroupSort);

    return (
        <li className={
            `mainAdminGroupPoint
            ${group?._id === activeGroup?._id ? 'mainAdminGroupPoint_active' : ''}
            ${group.assigned ? 'mainAdminGroupPoint_assigned' : ''}
            `
        }>
            <button
                className={`mainAdminGroupPoint__button ${group.assigned ? 'mainAdminGroupPoint_assigned' : ''}`}
                onClick={handleActiveGroup}
            > 
                {`
                    ${group.name},
                    ${group.assigned ? "назначена" : "не назначена"},
                    ${calcDate(group.dateStart)} -
                    ${calcDate(group.dateEnd)}
                `}   
            </button>
            {group?._id === activeGroup?._id &&
                <ul className='mainAdminGroupPoint__list'>
                    {usersGroupSort.map((item, index)=>
                        // <MainAdminUserPointProgramm key={index}
                        //     groupUser={item} userProgramm={user?.education.find((el)=> el.group === item._id)}
                        // />
                        <li>
                            <p>{`${item.name}, ${item.snils}`}</p>

                            {/* <button onClick={()=>setIsContentProgramm(!isContentProgramm)}>{item.name}</button>
                            {isContentProgramm &&
                                <p>{user?.education.find((el)=> el.group === item._id)?.programm?.name}</p>
                            } */}
                        </li>    
                    )}
                </ul>
            }
        </li>

    )
}


