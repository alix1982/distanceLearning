import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formAdminUserData } from "../../../share/constant";
// import { receivingQuestionnaires, removeQuestionnaire, sendingQuestionnaireAdmin } from "../../../store/slice/questionnaireSlice";
// import { sendingUserAdmin } from "../../../store/slice/userSlice";
import { MainAdminUserCardInput } from "./mainAdminUserCardInput/MainAdminUserCardInput";
import { receivingUsers, removeUser, updateUserAdminProgramm } from "../../../store/slice/userSlice";

export const MainAdminUserCard = ({userCard}) => {

    const dispatch = useDispatch();
    const [values, setValues] = useState({ name:'', password:'', snils:'', programm1: false, programm2: false, programm3: false });
    const [isValidForm, setIsValidForm] = useState({ name:'', password:'', snils:'', programm1: '', programm2: '', programm3: '' });
    const [isValid, setIsValid] = useState(false);
    const [isValidDelete, setIsValidDelete] = useState(false);

    const thema = {
        timestart: 0,
        timeend: 0,
        passed: false
    };
    // const themaFirst = {
    //     timestart: 0,
    //     timeend: 0,
    //     passed: true
    // };
    const block = {
        thema1: thema,
        thema2: thema,
        thema3: thema,
        test: {time:0, passed: false}
    }
    // const blockFirst = {
    //     thema1: themaFirst,
    //     thema2: thema,
    //     thema3: thema,
    // }

    // заполнение формы данными выбранной анкеты
    useEffect(()=>{
        setValues({
            name: userCard?.name,
            password: userCard?.password,
            snils: userCard?.snils,
            programm1: userCard.programm?.programm1.assigned,
            programm2: userCard.programm?.programm2.assigned,
            programm3: userCard.programm?.programm3.assigned,
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
// console.log(values);
// console.log(userCard.programm);

const handleSubmit = async (e) => {
    e.preventDefault();
    const programm1Assigned = values.programm1 ? values.programm1 : false;
    const programm2Assigned = values.programm2 ? values.programm2 : false;
    const programm3Assigned = values.programm3 ? values.programm3 : false;
    const programm1 = userCard.programm.programm1.assigned === programm1Assigned ?
        userCard.programm.programm1 :
        {assigned: programm1Assigned, block1: block, block2: block, block3: block};
    const programm2 = userCard.programm.programm2.assigned === programm2Assigned ?
        userCard.programm.programm2 :
        {assigned: programm2Assigned, block1: block, block2: block, block3: block};
    const programm3 = userCard.programm.programm3.assigned === programm3Assigned ?
        userCard.programm.programm3 :
        {assigned: programm3Assigned, block1: block, block2: block, block3: block};
    const data = {
        id: userCard._id,
        programm: {
            programm1: programm1,
            programm2: programm2,
            programm3: programm3,
        }
    };
    await dispatch(updateUserAdminProgramm(data));
    await dispatch(receivingUsers());
    // setValues({ name:'', password:'', snils:'', programm1: false, programm2: false, programm3: false });
}

const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(removeUser(userCard._id));
    await dispatch(receivingUsers());
    setValues({ name:'', password:'', snils:'', programm1: false, programm2: false, programm3: false });
}
// console.log(isValidForm);
// console.log(values);
// console.log(userCard);
// console.log(isValid);
const sumTests = () => {
    let count = 0;
    if (userCard.programm) {
       userCard.programm.programm1.block1.test.passed && count++;
        userCard.programm.programm1.block2.test.passed && count++;
        userCard.programm.programm1.block3.test.passed && count++; 
    }
    return count;
}
const sumStartKurs = (dateUnix) => {
    if (userCard.programm && dateUnix !== 0) {
        const date = new Date(dateUnix);
        console.log(date);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        // const seconds = date.getSeconds();
        const formattedTime = day + '.' + (month+1) + '.' + year + ' ' + hours + ':' + minutes;
        // const formattedTime = day + '.' + (month+1) + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds;
        return formattedTime
    }
    return dateUnix
}

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
            <div>
                <p>программа1</p>
                <p>начато прохождения: {sumStartKurs(userCard.programm ? userCard.programm.programm1.block1.thema1.timestart : 0)}</p>
                <p>тестов пройдено: {sumTests()}</p>
                <p>окончание программы: {sumStartKurs(userCard.programm ? userCard.programm.programm1.block3.test.time : 0)}</p>
            </div>
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


