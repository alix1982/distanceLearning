import { useNavigate } from 'react-router-dom';
import logo from '../../../image/header/logo.png';
import { logout } from '../../store/slice/authSlice';

// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

function HeaderAdmin({menu, setMenu}) {
    const dispatch = useDispatch();
    const navigation = useNavigate()
    // const {questionnaires} = useSelector(state => state.questionnaireSlice);
    const handleLogout = () => {
        navigation('/');
        dispatch(logout());
    }
    // useEffect(()=>{
    //     dispatch(receivingQuestionnaires())
    // },[])
    // console.log(menu)
    return(
            <header className='headerAdmin'>
                <button className='headerAdmin__buttonExit' onClick={handleLogout}>
                    <img className='headerAdmin__logo' src={logo} alt='логотип'/>
                </button>
                <div className='headerAdmin__content'>
                    <h1 className='headerAdmin__heading'>Панель администрирования</h1>
                    <ul className='headerAdmin__list'>
                        <li className='headerAdmin__point'>
                            <button
                                className={`headerAdmin__buttonPoint ${menu === 'questionnaires' ? 'headerAdmin__buttonPoint_active' : ''}`}
                                onClick={()=>{setMenu('questionnaires')}}
                            >
                                анкеты
                            </button>
                        </li>
                        <li className='headerAdmin__point'>
                            <button
                                className={`headerAdmin__buttonPoint ${menu === 'users' ? 'headerAdmin__buttonPoint_active' : ''}`}
                                onClick={()=>{setMenu('users')}}
                            >
                                пользователи
                            </button>
                            {/* <button className='headerAdmin__buttonPoint' onClick={()=>{setMenu('users')}}>пользователи</button> */}
                        </li>
                        <li className='headerAdmin__point'>
                            <button
                                className={`headerAdmin__buttonPoint ${menu === 'programms' ? 'headerAdmin__buttonPoint_active' : ''}`}
                                onClick={()=>{setMenu('programms')}}
                            >
                                программы
                            </button>
                            {/* <button className='headerAdmin__buttonPoint' onClick={()=>{setMenu('programms')}}>программы</button> */}
                        </li>
                    </ul>    
                </div>
                
            </header>
    )
}

export default HeaderAdmin;