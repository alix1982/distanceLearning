import { useEffect, useState } from 'react';
import { PointList } from './pointList/PointList';
import { formQuestionnaireData } from '../../share/constant';
import { useDispatch, useSelector } from 'react-redux';
import { sendingQuestionnaire, setErrorQuestionnaire } from '../../store/slice/noAutorizationSlice';

export const FormQuestionnaire = () => {

    const { isLoadingQuestionnaire, errorQuestionnaire, mesQuestionnaire } = useSelector(state => state.noAutorizationSlice)

    const {REACT_APP_SEND_EMAIL} = process.env;

    const dispatch = useDispatch();

    const [isValid, setIsValid] = useState(false);
    const [values, setValues] = useState({
        firstName:'', lastName:'', patronymic:'', workName:'', email:'', phone:'',
        postWork:'', postGoAndChs:'', yearPreviousQualification:'',
        education:'', snils:'', citizenship:''
    });
    const [isValidForm, setIsValidForm] = useState({
        firstName:'', lastName:'', patronymic:'', workName:'', email:'', phone:'',
        postWork:'', postGoAndChs:'', yearPreviousQualification:'',
        education:'', snils:'', citizenship:''
    });

    // проверка валидности формы
    useEffect(()=>{
        (
            isValidForm.firstName === '' && isValidForm.lastName === '' && isValidForm.patronymic === '' &&
            isValidForm.workName === '' && isValidForm.email === '' && isValidForm.phone === '' &&
            isValidForm.postWork === '' && isValidForm.postGoAndChs === '' && isValidForm.yearPreviousQualification === '' &&
            isValidForm.education === '' && isValidForm.snils === '' && isValidForm.citizenship === '' &&
            // isValidForm.isModeration === true &&
            values.firstName !== '' && values.lastName !== '' && values.patronymic !== '' &&
            values.workName !== '' && values.email !== '' && values.phone !== '' &&
            values.postWork !== '' && values.postGoAndChs !== '' && values.yearPreviousQualification !== '' &&
            values.education !== '' && values.snils !== '' && values.citizenship !== ''
        ) ? setIsValid(true) : setIsValid(false);
    },[values]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(sendingQuestionnaire({...values, emailRequst: REACT_APP_SEND_EMAIL}))
            .then((res)=>{
                res.payload !== undefined && setValues({
                    firstName:'', lastName:'', patronymic:'', workName:'', email:'', phone:'',
                    postWork:'', postGoAndChs:'', yearPreviousQualification:'',
                    education:'', snils:'', citizenship:''
                });
                setTimeout(()=>{dispatch(setErrorQuestionnaire())}, 5000);
            })
    }

    return (
        <form className='formQuestionnaire' onSubmit={handleSubmit}>
            <ul className='formQuestionnaire__list'>
                {formQuestionnaireData.map((input) => 
                    <PointList key={input.id} id={input.id} text={input.text}
                        name={input.name} type={input.type} placeholder={input.placeholder}
                        pattern={input.pattern} title={input.title}
                        minLength={input.minLength} maxLength={input.maxLength}
                        required={input.required} min={input.min} max={input.max}
                        values={values} setValues={setValues}
                        isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                    />
                )}
            </ul>
            <button className='formQuestionnaire__buttonSubmit' disabled={!isValid || isLoadingQuestionnaire}>
                {isLoadingQuestionnaire ? 'Отправка...' : 'Отправить'}
            </button>
            <span className='formQuestionnaire__buttonSubmit_error'>{errorQuestionnaire}</span>
            <span className='formQuestionnaire__buttonSubmit_fulfilled'>{mesQuestionnaire}</span>
            <p className='formQuestionnaire__text'>Нажимая кнопку, принимаю условия политики и пользовательского соглашения</p>
        </form>
    )
}


