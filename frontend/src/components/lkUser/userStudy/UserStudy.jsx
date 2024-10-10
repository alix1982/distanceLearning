// import logo from '../../image/header/logo.png';
// import burger from '../../image/header/burger.svg';
// import profile from '../../image/header/profile.svg';
// import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
// import { programmName } from "../../share/constantProgramm";
import ProgrammPointUserStudy from "./programmPointUserStudy/ProgrammPointUserStudy";
import { Spinner } from "../../share/spinner/Spinner";
import { useEffect } from "react";
import { receivingGroupsUser } from "../../store/slice/userSlice";

// import { useState } from "react";

function UserStudy() {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userSlice?.userData)
    const { isLoadingGroupsUser, groups } = useSelector(state => state.userSlice)

    // const {programm} = user;
    // const [isMenu, setIsMenu] = useState('lk')
    // const navigation = useNavigate();
    // function handleRequest () {
    //     navigation('/questionnaire')
    // }
    // console.log(user)
    
    useEffect(()=>{
        dispatch(receivingGroupsUser());
    },[])
    // console.log(groups);
    if (isLoadingGroupsUser) {
        return <Spinner/>
    }
 
    return (
        <section className='userStudy'>
            <h1 className='userStudy__heading'>Личный кабинет</h1>
            <ul className='userStudy__list'>
                {(user && user.education.length > 0) && user.education.map((item) => 
                    <ProgrammPointUserStudy key={item._id} group={item}/>
                )}
            </ul>
        </section>

    )
}

export default UserStudy;