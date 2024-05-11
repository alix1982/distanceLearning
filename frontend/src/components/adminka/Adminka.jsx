// import logo from '../../image/logo1.jpg';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { receivingQuestionnaires } from '../../store/slice/questionnaireSlice';
import HeaderAdmin from './headerAdmin/HeaderAdmin';
import FooterAdmin from './footerAdmin/FooterAdmin';
import MainAdminQuestionnaire from './mainAdminQuestionnaire/MainAdminQuestionnaire';
import MainAdminProgramm from './mainAdminProgramm/MainAdminProgramm';
import MainAdminUser from './mainAdminUser/MainAdminUser';
import { useDispatch, useSelector } from 'react-redux';
import { receivingQuestionnaires } from '../store/slice/questionnaireSlice';
import { receivingUsers } from '../store/slice/userSlice';
// import { useNavigate } from 'react-router-dom';

const Adminka = () => {
  const { isAuthAdmin } = useSelector(state => state.authSlice);

    const [menu, setMenu] = useState('questionnaires');
    const dispatch = useDispatch();
    // const {questionnaires} = useSelector(state => state.questionnaireSlice);
    // console.log(questionnaires);
    // const navigation = useNavigate();
    // function handleRequest () {
    //     navigation('/questionnaire')
    // }
    useEffect(()=>{
      if (isAuthAdmin) {
        dispatch(receivingQuestionnaires());
        dispatch(receivingUsers());
      }
    },[isAuthAdmin]);
    // console.log(menu);
    return (
        <>
            <HeaderAdmin menu={ menu } setMenu={ setMenu }/>
            { menu === 'programms' && <MainAdminProgramm/> }
            { menu === 'users' && <MainAdminUser/> }
            { (menu !== 'programms' && menu !== 'users') && <MainAdminQuestionnaire/> }
            <FooterAdmin/>
        </>
        
    )
}

export default Adminka;