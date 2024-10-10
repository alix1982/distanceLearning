import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { InputForm } from '../share/inputForm/InputForm';
import { authUser } from '../store/slice/authSlice';

export const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth, isAuthAdmin } = useSelector(state => state.authSlice);
    // console.log(isAuth);
    useEffect(()=>{
        isAuthAdmin && navigate('/admin');
        isAuth && navigate('/');
    },[isAuthAdmin, isAuth])
    // const { isPreloader: loader, doctorProfile } = useSelector((state) => state.doctorProfile);

    const [values, setValues] = useState({
        name: '', password: '', snils: '',
    });
    const [isValidForm, setIsValidForm] = useState({
        name: '', password: '', snils: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(values);
        dispatch(authUser(values));
        setValues({
            name: '', password: '', snils: '',
        });
    }
    return (
        <section className='signin'>
          <div className='signin__popup'>
            <h1 className='signin__heading'>Вход</h1>
            <p className='signin__headingText'>в личный кабинет</p>
            <form className='signin__form'>
                <InputForm
                    name={'name'} type={"text"} placeholder={"логин"}
                    title='error'
                    values={values} setValues={setValues}
                    isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                />
                <InputForm
                    name={'password'} type={"text"} placeholder={"пароль"}
                    title='error'
                    values={values} setValues={setValues}
                    isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                />
                <InputForm
                    name={'snils'} type={"text"} placeholder={"СНИЛС"}
                    title='error'
                    maxLength={11} minLength={11}
                    pattern='^\d+$'
                    values={values} setValues={setValues}
                    isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                />
                <button className='signin__buttonSubmit' onClick={handleSubmit}>Отправить</button>
                <button className='signin__buttonExit' onClick={()=> {navigate('/')}}>На главную</button>
                {/* <p className='signin__text'>Нажимая кнопку, принимаю условия политики и пользовательского соглашения</p> */}
            </form>
          </div>
        </section> 
        
    )
}


