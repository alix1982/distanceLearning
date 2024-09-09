import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MainAdminUserPoint } from './mainAdminUserPoint/MainAdminUserPoint';
import { MainAdminUserCard } from './mainAdminUserCard/MainAdminUserCard';

function MainAdminUser() {
    const [userCard, setUserCard] = useState({})
    const [criterionUserGroups, setCriterionUserGroups] = useState('actual')

    const {users} = useSelector(state => state.userSlice);
    const [activeUser, setActiveUser] = useState({});
    // console.log(users)
    useEffect(()=>{
        setActiveUser(users?.find((item)=>item._id === userCard?._id));
        setCriterionUserGroups('actual')
    },[userCard]);
 
    return (
        <main className='mainAdminUser'>
            <ol className='mainAdminUser__list'>
                {users ? users.map((user, index)=>
                    <MainAdminUserPoint key={index} 
                        user={user}
                        setUserCard={setUserCard}
                        activeUser={activeUser}
                        criterionUserGroups={criterionUserGroups}
                    />
                ) : <p>Пользователи не найдены</p>}
            </ol>
            <MainAdminUserCard
                userCard={userCard}
                criterionUserGroups={criterionUserGroups} setCriterionUserGroups={setCriterionUserGroups}
            />
        </main>
    )
}

export default MainAdminUser;
