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
import { receivingProgramms } from '../store/slice/programmSlice';
import MainAdminGroup from './mainAdminGroup/MainAdminGroup';
import { receivingGroups } from '../store/slice/groupSlice';
// import { useNavigate } from 'react-router-dom';

const Adminka = () => {
  const { isAuthAdmin } = useSelector(state => state.authSlice);

    const [menu, setMenu] = useState('questionnaires');
    const [isRenderAdmin, setIsRenderAdmin] = useState(false)
    const dispatch = useDispatch();
    // const {questionnaires} = useSelector(state => state.questionnaireSlice);
    // console.log(questionnaires);
    // const navigation = useNavigate();
    // function handleRequest () {
    //     navigation('/questionnaire')
    // }
    useEffect(() => {
      // console.log(window.screen.width);
      window.screen.width <= 1000 ? setIsRenderAdmin(false) : setIsRenderAdmin(true)
    }, [window.screen.width]);
    
    useEffect(()=>{
      if (isAuthAdmin) {
        dispatch(receivingQuestionnaires());
        dispatch(receivingUsers());
        dispatch(receivingProgramms());
        dispatch(receivingGroups());
      }
    },[isAuthAdmin]);
    // console.log(menu);
    return (
        <>
          {isRenderAdmin ?
            <>
              <HeaderAdmin menu={ menu } setMenu={ setMenu }/>
              { menu === 'programms' && <MainAdminProgramm/> }
              { menu === 'users' && <MainAdminUser/> }
              { menu === 'groups' && <MainAdminGroup/> }
              { (menu !== 'programms' && menu !== 'users' && menu !== 'groups') && <MainAdminQuestionnaire/> }
              <FooterAdmin/>
            </> :
            <p>Для пользования админкой воспользуйтесь компьтером</p>
        }
        </>
    )
}

export default Adminka;