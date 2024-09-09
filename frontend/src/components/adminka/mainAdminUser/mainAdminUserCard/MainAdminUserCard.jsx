import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formAdminUserData } from "../../../share/constant";
// import { receivingQuestionnaires, removeQuestionnaire, sendingQuestionnaireAdmin } from "../../../store/slice/questionnaireSlice";
// import { sendingUserAdmin } from "../../../store/slice/userSlice";
import { MainAdminUserCardInput } from "./mainAdminUserCardInput/MainAdminUserCardInput";
import { receivingUsers, removeUser, updateUserAdminDeleteGroup, updateUserAdminGroup } from "../../../store/slice/userSlice";

export const MainAdminUserCard = ({ userCard, criterionUserGroups, setCriterionUserGroups }) => {
    const dispatch = useDispatch();
    const [groupsUser, setGroupsUser] = useState([]); // обьекты групп назначенных пользователю из id групп в обьекте пользователя
    const [values, setValues] = useState({ name:'', password:'', snils:'', groupName: '', groupUser: '' });
    const [isValidForm, setIsValidForm] = useState({ name:'', password:'', snils:'', groupName: '', groupUser: '' });
    const [isValid, setIsValid] = useState(false);
    const [isValidDelete, setIsValidDelete] = useState(false);

    const { programms } = useSelector(state => state.programmSlice);
    const { groupCard } = useSelector(state => state.groupSlice);
    const {groups} = useSelector(state => state.groupSlice);

    // заполнение формы данными выбранной анкеты
    useEffect(()=>{
        setValues({
            name: userCard?.name,
            password: userCard?.password,
            snils: userCard?.snils,
            groupName: '',
            groupUser: ''
        })
        setIsValidForm({ name:'', password:'', snils:'',  groupName: '', groupUser: '' });
        userCard?.name ? setIsValidDelete(true) : setIsValidDelete(false);
    },[userCard]);

    //проверка валидности формы
    useEffect(()=>{
        ( 
            isValidForm.name === '' && isValidForm.password === '' && isValidForm.snils === '' && isValidForm.groupName === '' &&
            values.name !== '' && values.password !== '' && values.snils !== '' && values.groupName !== ''
        ) ? setIsValid(true) : setIsValid(false);
    },[values]);

    useEffect(()=>{
        let xxx = [];
        (userCard.education &&
            userCard.education.map((groupUser) => {
                let x = groups.find((group)=> (String(group._id) === String(groupUser.group)));
                // if (x !== undefined) {
                    return xxx = [...xxx, x]
                // } else {
                    // return xxx
                // }
            })
        )
        // console.log(xxx)
        setGroupsUser(xxx);
    },[userCard])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id: userCard._id,
            name: { groupName: values.groupName }
        };

        await dispatch(updateUserAdminGroup(data));
        await dispatch(receivingUsers());
        setValues({ name:'', password:'', snils:'', groupName: '', groupUser: '' });
    }
    
    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeUser(userCard._id));
        await dispatch(receivingUsers());
        setValues({ name:'', password:'', snils:'', groupName: '', groupUser: '' });
    }
    const handleDeleteGroupUser = async (e) => {
        e.preventDefault();
        const data = {
            id: userCard._id,
            name: { groupId: values.groupUser }
        };
        await dispatch(updateUserAdminDeleteGroup(data));
        await dispatch(receivingUsers());
        setValues({ name:'', password:'', snils:'', groupName: '', groupUser: '' });

        // setValues({ name:''
    }
    // console.log(isValidForm);
    // console.log(values);
    // console.log(userCard);
    // console.log(isValid);
    // console.log(values);
    // console.log(groups);
    // console.log(programms);
    // console.log(groupsUser);

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
            // console.log(date);
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
    const handleChangeSelect = (e) => {
        setValues({...values, groupName: e.target.value});
        setIsValidForm({...isValidForm, groupName:e.target.validationMessage})
    }
    const handleChangeSelectGroupUser = (e) => {
        setValues({...values, groupUser: e.target.value});
        setIsValidForm({...isValidForm, groupName:e.target.validationMessage})
    }
    const handlePastGroup = (e) => {
        e.preventDefault();
        setCriterionUserGroups('past')
    }
    const handleActualGroup = (e) => {
        e.preventDefault();
        setCriterionUserGroups('actual')
    }
    const handleFutureGroup = (e) => {
        e.preventDefault();
        setCriterionUserGroups('future')
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
                
                <li>
                    <label className='mainAdminGroupCard__select'>
                        <p className='mainAdminGroupCard__selectHeading'>Добавить в группу</p>
                        <select className='mainAdminGroupCard__selectInput' name='group'
                            disabled={!isValidDelete} onChange={handleChangeSelect}
                            // defaultValue={values.groupName === '' && ''}
                        >
                            <option
                                className='mainAdminGroupCard__optionDefault'
                                selected={values.groupName === ''}
                                value=''
                            >
                                Группы
                            </option>
                            {groups?.map((group) =>
                                <option key={group._id}
                                    disabled={groupsUser.find((item)=> item._id === group._id)}
                                    value={group.name}
                                >
                                    {group.name}
                                </option>
                            )}
                        </select>
                    </label>    
                </li>
            </ul>
            <div className='mainAdminUserCard__buttons'>
                <button className='mainAdminUserCard__button' onClick={handleSubmit}
                    disabled={!(isValid && isValidDelete)}
                >
                    Изменить
                </button>
                <button
                    className='mainAdminUserCard__button'
                    onClick={handleDelete}
                    disabled={(!isValidDelete) || (userCard.education.length > 0)}
                >
                    удалить
                </button>
            </div>
            <div>
                <h2 className='mainAdminUserCard__heading mainAdminGroupCard__showGroupHeading'>Показать группы</h2>
                <div className='mainAdminGroupCard__showGroupButtons'>
                    <button
                        className='mainAdminUserCard__button mainAdminGroupCard__showGroupButton'
                        onClick={handlePastGroup}
                        disabled={criterionUserGroups === 'past'}
                    >
                        Прошедшие
                    </button>
                    <button
                        className='mainAdminUserCard__button mainAdminGroupCard__showGroupButton'
                        onClick={handleActualGroup}
                        disabled={criterionUserGroups === 'actual'}
                    >
                        Текущие
                    </button>
                    <button
                        className='mainAdminUserCard__button mainAdminGroupCard__showGroupButton'
                        onClick={handleFutureGroup}
                        disabled={criterionUserGroups === 'future'}
                    >
                        Будущие
                    </button>
                </div>    
            </div>
            <div>
                <h2 className='mainAdminUserCard__heading'>Редактирование групп пользователя</h2>
                <div className='mainAdminGroupCard__select'>
                    <p className='mainAdminGroupCard__selectHeading'>Удалить группу</p>
                    <select
                        className='mainAdminGroupCard__selectInput'
                        name='deleteGroup'
                        onChange={handleChangeSelectGroupUser}
                        // defaultValue={values.groupUser === '' && ''}
                        // disabled={!isValidDelete} onChange={handleChangeSelect}
                    >
                        <option
                            className='mainAdminGroupCard__optionDefault'
                            value=''
                            selected={values.groupUser === ''}
                        >
                            Группы пользователя
                        </option>
                        {groupsUser.map((groupUser, index) =>
                            <option key={index}
                                disabled={ (groupUser.dateStart) < (new Date().getTime()) }
                                value={groupUser._id}
                            >
                                {groupUser.name}
                            </option>
                        )}
                    </select>
                    <button
                        className='mainAdminUserCard__button'
                        onClick={handleDeleteGroupUser}
                        disabled={values.groupUser === ''}
                    >
                        удалить
                    </button>
                </div>
            </div>
        </form>
    )
}


