import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MainAdminUserPointProgramm } from "./mainAdminUserPointProgramm/mainAdminUserPointProgramm";

export const MainAdminUserPoint = ({ user, setUserCard, activeUser, criterionUserGroups }) => {
    const [groupsUser, setGroupsUser] = useState([]); // обьекты групп назначенных пользователю из id групп в обьекте пользователя
    const [groupsUserSort, setGroupsUserSort] = useState([]); // обьекты назначенных пользователю для рендера 
    // const [isContentProgramm, setIsContentProgramm] = useState(false);

    const sortGroupUser = (criterion) => {
        let xxx = []
        switch (criterion) {
            case 'past':
                xxx = groupsUser.filter((item) => (item.dateEnd/1000) < (Math.floor(new Date().getTime() / 1000)));
                setGroupsUserSort(xxx);
                break;
            case 'actual':
                xxx = groupsUser.filter((item) => 
                    (item.dateEnd/1000 >= Math.floor(new Date().getTime() / 1000)) && 
                        (item.dateStart/1000 <= Math.floor(new Date().getTime() / 1000))
                );
                setGroupsUserSort(xxx);
                break;
            case 'future':
                xxx = groupsUser.filter((item) => (item.dateStart/1000) > (Math.floor(new Date().getTime() / 1000)));
                setGroupsUserSort(xxx);
                break;
            default:
                break;
        }
    }


    const {groups} = useSelector(state => state.groupSlice);
    useEffect(()=>{
        let xxx = []
        user.education.map((groupUser) => {
            let x = groups.find((group)=> (String(group._id) === String(groupUser.group)));
            return xxx = [...xxx, x]
        })
        setGroupsUser(xxx);
        sortGroupUser('actual')
    },[activeUser])
    
    useEffect(()=>{
        sortGroupUser(criterionUserGroups);
    },[criterionUserGroups])
    
    // console.log(groups);
    // console.log(user);
    // console.log(activeUser)
    // console.log(groupsUserSort);
    // console.log(user.education.find((item)=> item.group === groupsUserSort[0]._id));

    return (
        <li className={
            `mainAdminUserPoint
            ${user?._id === activeUser?._id ? 'mainAdminUserPoint_active' : ''}
            ${user?.education.length > 0 ? 'mainAdminProgrammPoint_addGroup' : ''}
            `
        }>
            <button
                className={`mainAdminUserPoint__button ${user?.education.length > 0 ? 'mainAdminProgrammPoint_addGroup' : ''}`}
                onClick={()=>{setUserCard(user)}}
            >
                {`${user.name},
                ${user.password},
                ${user.snils},
                `}
            </button>
            {user?._id === activeUser?._id &&
                <ul className='mainAdminUserPoint__list'>
                    {groupsUserSort.map((item, index)=>
                        <MainAdminUserPointProgramm key={index}
                            groupUser={item} userProgramm={user?.education.find((el)=> el.group === item._id)}
                        />
                        // <li>
                        //     <button onClick={()=>setIsContentProgramm(!isContentProgramm)}>{item.name}</button>
                        //     {isContentProgramm &&
                        //         <p>{user?.education.find((el)=> el.group === item._id)?.programm?.name}</p>
                        //     }
                        // </li>    
                    )}
                </ul>
            }
        </li>
    )
}
