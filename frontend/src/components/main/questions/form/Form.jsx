import { useEffect, useState } from 'react';
import { InputForm } from '../../../share/inputForm/InputForm';
import { Textarea } from '../textarea/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { sendingQuestion, setErrorQuestion } from '../../../store/slice/noAutorizationSlice';

export const Form = () => {
    const { isLoadingQuestion, errorQuestion, mesQuestion } = useSelector(state => state.noAutorizationSlice)

    const {REACT_APP_SEND_EMAIL} = process.env;

    const [values, setValues] = useState({nameInput:'', phone:'', email:'', text:''});
    const [isValidForm, setIsValidForm] = useState({nameInput:'', phone:'', email:'', text:''});
    const [isValid, setIsValid] = useState(false);

    const dispatch = useDispatch();


    // проверка валидности формы
    useEffect(()=>{
        (
            isValidForm.nameInput === '' &&
            isValidForm.phone === '' &&
            isValidForm.email === '' &&
            isValidForm.text === ''  &&

            values.nameInput !== '' &&
            values.phone !== '' &&
            values.email !== '' &&
            values.text !== '' 
        ) ? setIsValid(true) : setIsValid(false);
    },[values]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(sendingQuestion({...values, emailRequst: REACT_APP_SEND_EMAIL}))
            .then((res)=>{
                res.payload?.message === "Письмо отправлено" && setValues({nameInput:'', phone:'', email:'', text:''});
                setTimeout(()=>{dispatch(setErrorQuestion())}, 5000);
            })
    }
    // console.log(values);

    return (
        <form className='form' onSubmit={handleSubmit} aria-label='форма обратной связи'>
            <InputForm
                name={'nameInput'} type={"text"} placeholder={"Имя"}
                // pattern="^[А-Яа-яЁёa-zA-Z\s\-]{2,50}$" title='error'
                maxLength= {30} minLength= {2} required= {true}
                values={values} setValues={setValues}
                isValidForm={isValidForm} setIsValidForm={setIsValidForm}
            />
            <InputForm
                name={'phone'} type={"text"} placeholder={"+79991112233"}
                // pattern="^\+?[1-9][0-9]{7,14}$"
                pattern="^((\+7|7|8)+([0-9]){10})$"
                maxLength= {18} minLength= {11} required= {true}
                values={values} setValues={setValues}
                isValidForm={isValidForm} setIsValidForm={setIsValidForm}
            />
            <InputForm
                name={'email'} type={"email"} placeholder={"email@email.ru"}
                // pattern={""}
                values={values} setValues={setValues}
                isValidForm={isValidForm} setIsValidForm={setIsValidForm}
            />
            <Textarea
                name={'text'} type={"text"} placeholder={"Ваш вопрос"}
                // pattern={""}
                maxLength= {1000} minLength= {2} required= {true}
                values={values} setValues={setValues}
                isValidForm={isValidForm} setIsValidForm={setIsValidForm}
            />
            <button className='form__buttonSubmit' disabled={!isValid || isLoadingQuestion}>
                {isLoadingQuestion ? 'Отправка...' : 'Отправить'}
            </button>
            <span className='form__buttonSubmit_error'>{errorQuestion}</span>
            <span className='form__buttonSubmit_fulfilled'>{mesQuestion}</span>

            <p className='form__text'>Нажимая кнопку, принимаю условия политики и пользовательского соглашения</p>
        </form>
    )
}


