import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MainAdminUserPoint } from './mainAdminUserPoint/MainAdminUserPoint';
import { MainAdminUserCard } from './mainAdminUserCard/MainAdminUserCard';

function MainAdminUser() {
    const [userCard, setUserCard] = useState({})

    const {users} = useSelector(state => state.userSlice);
    const [activeUser, setActiveUser] = useState({});

    useEffect(()=>{
        setActiveUser(users?.find((item)=>item._id === userCard?._id))
    },[userCard]);
 
    return (
        <main className='mainAdminUser'>
            <ol className='mainAdminUser__list'>
                {users ? users.map((user, index)=>
                    <MainAdminUserPoint key={index} user={user} setUserCard={setUserCard} activeUser={activeUser}/>
                ) : <p>Пользователи не найдены</p>}
            </ol>
            <MainAdminUserCard userCard={userCard}/>
        </main>
    )
}

export default MainAdminUser;
