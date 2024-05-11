import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainAdminQuestionnaireCardInput } from "./mainAdminQuestionnaireCardInput/MainAdminQuestionnaireCardInput";
import { formAdminQuestionnaireData } from "../../../share/constant";
import {
    receivingQuestionnaires,
    removeQuestionnaire,
    sendingQuestionnaireAdmin,
    setIsModerationState,
    setQuestionnaireAdmin,
    setModerationQuestionnaireAdmin,
    setQuestionnaireCard } from "../../../store/slice/questionnaireSlice";
import { receivingUsers, sendingUserAdmin } from "../../../store/slice/userSlice";

export const MainAdminQuestionnaireCard = ({questionnairesSort}) => {
    const dispatch = useDispatch();

    const {
        questionnaireCard,
        isModarationState,
        isLoadingModaration,
        isLoadingQuestionnaires,
        isLoadingDeleteCard,
        isLoadingFixQuestionnaire,
        isLoadingCreateAdmin,
        // errorMes,
        // errorCreateAdmin,
        // errorReceivingQuestionnaires,
        // errorFixQuestionnaire,
        // errorModaration,
        // errorDeleteCard,
    } = useSelector(state => state.questionnaireSlice);

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
    const [isValidCreate, setIsValidCreate] = useState(false)
    const [isValidDelete, setIsValidDelete] = useState(false)
    const [isCreateUser, setIsCreateUser] = useState(false);

    useEffect(()=>{
        questionnairesSort.find((item)=> item === questionnaireCard?._id) === undefined ? setIsCreateUser(false) : setIsCreateUser(true)
    },[questionnaireCard, questionnairesSort]);
    
    // заполнение формы данными выбранной анкеты
    useEffect(()=>{
        setValues({
            firstName: questionnaireCard?.firstName === undefined ? '' : questionnaireCard.firstName,
            lastName: questionnaireCard?.lastName === undefined ? '' : questionnaireCard.lastName,
            patronymic: questionnaireCard?.patronymic === undefined ? '' : questionnaireCard.patronymic,
            workName: questionnaireCard?.workName === undefined ? '' : questionnaireCard.workName,
            email: questionnaireCard?.email === undefined ? '' : questionnaireCard.email,
            phone: questionnaireCard?.phone === undefined ? '' : questionnaireCard.phone,
            postWork: questionnaireCard?.postWork === undefined ? '' : questionnaireCard.postWork,
            postGoAndChs: questionnaireCard?.postGoAndChs === undefined ? '' : questionnaireCard.postGoAndChs,
            yearPreviousQualification: questionnaireCard?.yearPreviousQualification === undefined ? '' : questionnaireCard.yearPreviousQualification,
            education: questionnaireCard?.education === undefined ? '' : questionnaireCard.education,
            snils: questionnaireCard?.snils === undefined ? '' : questionnaireCard.snils,
            citizenship: questionnaireCard?.citizenship === undefined ? '' : questionnaireCard.citizenship,
        });

        dispatch(setIsModerationState(questionnaireCard?.isModeration === undefined ? '' : questionnaireCard.isModeration));

        setIsValidForm({
            firstName:'', lastName:'', patronymic:'', workName:'', email:'', phone:'',
            postWork:'', postGoAndChs:'', yearPreviousQualification:'',
            education:'', snils:'', citizenship:''
        });
        questionnaireCard?.firstName ? setIsValidDelete(true) : setIsValidDelete(false);
    },[questionnaireCard]);

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
        ) ? setIsValidCreate(true) : setIsValidCreate(false);
    },[values]);

    const handleModeration = async (e) => {
        e.preventDefault();
        await dispatch(setModerationQuestionnaireAdmin({isModeration: !isModarationState, id: questionnaireCard._id}));
        await dispatch(receivingQuestionnaires());
    }

    const handleCreateUser = async (e) => {
        e.preventDefault();
        console.log(values.snils);
        await dispatch(sendingUserAdmin(values.snils));
        await dispatch(receivingUsers());
    }

    const handleCreateQuestionnaire = async (e) => {
        e.preventDefault();
        console.log(values.snils);
        await dispatch(sendingQuestionnaireAdmin(values));
        await dispatch(receivingQuestionnaires());
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(removeQuestionnaire(questionnaireCard._id))
            .then(()=>{
                dispatch(receivingQuestionnaires())
            })
        setValues({
            firstName:'', lastName:'', patronymic:'', workName:'', email:'', phone:'',
            postWork:'', postGoAndChs:'', yearPreviousQualification:'',
            education:'', snils:'', citizenship:''
        });
        dispatch(setIsModerationState(false));
        dispatch(setQuestionnaireCard({}));
    }

    const handleFixQuestionnaire = async (e) => {
        e.preventDefault();
        await dispatch(setQuestionnaireAdmin({...values, id: questionnaireCard._id}));
        await dispatch(receivingQuestionnaires());
    }

    const handleCancelForm = (e) => {
        e.preventDefault();
        dispatch(setQuestionnaireCard({}));
    };

    // console.log(errorCreateAdmin);
    // console.log(isValidDelete);
    // console.log(questionnaireCard);
    // console.log(values);
    // console.log(isModarationState);
    
    return (
        <form className='mainAdminQuestionnaireCard'>
            <h1 className='mainAdminQuestionnaireCard__heading'>Редактирование анкеты</h1>
            {isCreateUser && <span className='mainAdminQuestionnaireCard__comment'>Пользователь создан</span>}
            <ul className='mainAdminQuestionnaireCard__list'>
                {formAdminQuestionnaireData.map((input) => 
                    <MainAdminQuestionnaireCardInput key={input.id} id={input.id} text={input.text}
                        name={input.name} type={input.type} placeholder={input.placeholder}
                        pattern={input.pattern} title={input.title} disabled={input.disabled}
                        minLength={input.minLength} maxLength={input.maxLength}
                        required={input.required} min={input.min} max={input.max}
                        isModarationState={isModarationState}
                        values={values} setValues={setValues} 
                        isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                    />
                )}
            </ul>
            <label className='mainAdminQuestionnaireCard__moderation'>
                <p className='mainAdminQuestionnaireCard__moderationHeading'>Проверка</p>
                <input
                    className='mainAdminQuestionnaireCard__moderationInput' name='isModeration' type='checkbox'
                    checked={isModarationState} value={isModarationState} disabled
                />
                <button
                    className='mainAdminQuestionnaireCard__button'
                    onClick={handleModeration}
                    disabled={!(isValidCreate && isValidDelete) || isCreateUser ||
                        isLoadingDeleteCard || isLoadingQuestionnaires || isLoadingFixQuestionnaire || isLoadingModaration || isLoadingCreateAdmin}
                >
                    {isLoadingModaration ? 'Обработка...' : isModarationState ? 'Отменить' : 'Проверено'}
                </button>
            </label>
            {isValidDelete ? 
                <div className='mainAdminQuestionnaireCard__buttons'>
                    <button
                        className='mainAdminQuestionnaireCard__button'
                        onClick={handleCancelForm}
                        disabled={
                            // !(!isModarationState) ||
                            isLoadingDeleteCard || isLoadingQuestionnaires || isLoadingFixQuestionnaire || isLoadingModaration || isLoadingCreateAdmin
                        }
                    >
                        сброс
                    </button>
                    {isModarationState ? 
                        <button
                            className='mainAdminQuestionnaireCard__button'
                            onClick={handleCreateUser}
                            disabled={!(isValidCreate && isValidDelete && isModarationState) || isCreateUser ||
                                isLoadingDeleteCard || isLoadingQuestionnaires || isLoadingFixQuestionnaire || isLoadingModaration || isLoadingCreateAdmin}
                        >
                            {isLoadingCreateAdmin ? 'Создание...' : 'создать пользователя'}
                        </button> :
                        <>
                            <button
                                className='mainAdminQuestionnaireCard__button'
                                onClick={handleFixQuestionnaire}
                                disabled={!(isValidCreate && isValidDelete && !isModarationState) ||
                                    isLoadingDeleteCard || isLoadingQuestionnaires || isLoadingFixQuestionnaire || isLoadingModaration || isLoadingCreateAdmin}
                            >
                                {isLoadingFixQuestionnaire ? 'Изменение...' : 'изменить'}
                            </button>
                            <button
                                className='mainAdminQuestionnaireCard__button'
                                onClick={handleDelete}
                                disabled={!(isValidDelete && !isModarationState) ||
                                    isLoadingDeleteCard || isLoadingQuestionnaires || isLoadingFixQuestionnaire || isLoadingModaration || isLoadingCreateAdmin}
                            >
                                {isLoadingDeleteCard ? 'Удаление...' : 'удалить'}
                            </button>
                        </>
                        
                    }
                    
                </div> :
                <div className='mainAdminQuestionnaireCard__buttons'>
                    <button
                        className='mainAdminQuestionnaireCard__button'
                        onClick={handleCreateQuestionnaire}
                        disabled={!(isValidCreate) ||
                            isLoadingDeleteCard || isLoadingQuestionnaires || isLoadingFixQuestionnaire || isLoadingModaration || isLoadingCreateAdmin}
                    >
                        {isLoadingCreateAdmin ? 'Создание...' : '+создать'}
                    </button>
                </div>
            }
            <p className='mainAdminQuestionnaireCard__textError'>
                {/* { errorCreateAdmin !== '' && errorCreateAdmin } */}
                {/* { errorReceivingQuestionnaires !== '' && errorReceivingQuestionnaires } */}
                {/* { errorFixQuestionnaire !== '' && errorFixQuestionnaire } */}
                {/* { errorModaration !== '' && errorModaration } */}
                {/* { errorDeleteCard !== '' && errorDeleteCard } */}
                {/* {errorMes} */}
            </p>
        </form>
    )
}


