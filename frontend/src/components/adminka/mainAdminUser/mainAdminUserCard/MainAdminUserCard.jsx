import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formAdminUserData } from "../../../share/constant";
// import { receivingQuestionnaires, removeQuestionnaire, sendingQuestionnaireAdmin } from "../../../store/slice/questionnaireSlice";
// import { sendingUserAdmin } from "../../../store/slice/userSlice";
import { MainAdminUserCardInput } from "./mainAdminUserCardInput/MainAdminUserCardInput";
import { receivingUsers, removeUser, updateUserProgramm } from "../../../store/slice/userSlice";

export const MainAdminUserCard = ({userCard}) => {

    const dispatch = useDispatch();

    const [values, setValues] = useState({ name:'', password:'', snils:'', programm1: false, programm2: false, programm3: false });
    const [isValidForm, setIsValidForm] = useState({ name:'', password:'', snils:'', programm1: '', programm2: '', programm3: '' });
    const [isValid, setIsValid] = useState(false)
    const [isValidDelete, setIsValidDelete] = useState(false)

    // заполнение формы данными выбранной анкеты
    useEffect(()=>{
        setValues({
            name: userCard?.name,
            password: userCard?.password,
            snils: userCard?.snils,
            programm1: userCard.programm?.programm1,
            programm2: userCard.programm?.programm2,
            programm3: userCard.programm?.programm3,
        })
        setIsValidForm({ name:'', password:'', snils:'', programm1: '', programm2: '', programm3: '' });
        userCard?.name ? setIsValidDelete(true) : setIsValidDelete(false);
    },[userCard]);

    //проверка валидности формы
    useEffect(()=>{
        ( 
            isValidForm.name === '' && isValidForm.password === '' && isValidForm.snils === '' &&
            // isValidForm.programm1 === '' && isValidForm.programm2 === '' && isValidForm.programm3 === '' &&
            values.name !== '' && values.password !== '' && values.snils !== '' &&
            (values.programm1 !== userCard.programm?.programm1 ||
            values.programm2 !== userCard.programm?.programm2 || 
            values.programm3 !== userCard.programm?.programm3)
        ) ? setIsValid(true) : setIsValid(false);
    },[values]);

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        id: userCard._id,
        programm: {
            programm1: values.programm1 ? values.programm1 : false,
            programm2: values.programm2 ? values.programm2 : false,
            programm3: values.programm3 ? values.programm3 : false,
        }
    };
    await dispatch(updateUserProgramm(data));
    await dispatch(receivingUsers());
    // setValues({ name:'', password:'', snils:'', programm1: false, programm2: false, programm3: false });
}

const handleDelete = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(userCard._id);
    await dispatch(removeUser(userCard._id));
    await dispatch(receivingUsers());
    setValues({ name:'', password:'', snils:'', programm1: false, programm2: false, programm3: false });
}
// console.log(isValidForm);
// console.log(values);
// console.log(userCard);
// console.log(isValid);

    return (
        <form className='mainAdminUserCard'>
            <h1 className='mainAdminUserCard__heading'>Редактирование пользователя</h1>
            <ul className='mainAdminUserCard__list'>
                {formAdminUserData.map((input) => 
                    <MainAdminUserCardInput key={input.id} id={input.id} text={input.text}
                        name={input.name} type={input.type} placeholder={input.placeholder}
                        pattern={input.pattern} title={input.title} disabled={input.disabled}
                        values={values} setValues={setValues}
                        isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                    />
                )}
            </ul>
            {/* <label className='mainAdminUserCard__moderation'>
                <p className='mainAdminUserCard__moderationHeading'>Программы</p>
                <span>1</span>
                <input className='mainAdminUserCard__programm' name='programm1' type='checkbox'/>
                <span>2</span>
                <input className='mainAdminUserCard__programm' name='programm2' type='checkbox'/>
                <span>3</span>
                <input className='mainAdminUserCard__programm' name='programm3' type='checkbox'/>
            </label> */}
            {/* <label className='mainAdminUserCard__moderation'>
                <p className='mainAdminUserCard__moderationHeading'>Программы</p>
                <span>1</span>
                <input className='mainAdminUserCard__programm' name='programm' type='radio'/>
                <span>2</span>
                <input className='mainAdminUserCard__programm' name='programm' type='radio'/>
                <span>3</span>
                <input className='mainAdminUserCard__programm' name='programm' type='radio'/>

            </label> */}
            <div className='mainAdminUserCard__buttons'>
                <button className='mainAdminUserCard__button' onClick={handleSubmit}
                    disabled={!(isValid && isValidDelete)}
                >
                    Изменить
                </button>
                <button
                    className='mainAdminUserCard__button'
                    onClick={handleDelete}
                    disabled={!isValidDelete}
                >
                    удалить
                </button>
            </div>
            {/* <p className='mainAdminQuestionnaireCard__text'>
                Нажимая кнопку, принимаю условия политики и пользовательского соглашения
            </p> */}
        </form>
    )
}


