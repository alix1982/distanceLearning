import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { receivingUsers } from '../../store/slice/userSlice';
import { MainAdminUserPoint } from './mainAdminUserPoint/MainAdminUserPoint';
import { MainAdminUserCard } from './mainAdminUserCard/MainAdminUserCard';

function MainAdminUser() {
    const [userCard, setUserCard] = useState({})
    // const dispatch = useDispatch();
    // const { isAuthAdmin } = useSelector(state => state.authSlice);
    const {users} = useSelector(state => state.userSlice);
    const [activeUser, setActiveUser] = useState({});

    // console.log(userCard);
    
    useEffect(()=>{
        setActiveUser(users?.find((item)=>item._id === userCard?._id))
    },[userCard]);

    // useEffect(()=>{
    //     isAuthAdmin && dispatch(receivingUsers())
    // },[isAuthAdmin])
 
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
