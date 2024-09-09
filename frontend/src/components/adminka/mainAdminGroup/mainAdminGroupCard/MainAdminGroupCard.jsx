import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcDateForm, formAdminGroupData } from "../../../share/constant";
import { receivingGroups, removeGroup, sendingGroupAdmin, setGroupCard } from "../../../store/slice/groupSlice";
import { MainAdminGroupCardInput } from "./mainAdminGroupCardInput/MainAdminGroupCardInput";

export const MainAdminGroupCard = () => {
    const dispatch = useDispatch();
    const {programms} = useSelector(state => state.programmSlice);

    const {
        groupCard,
        isLoadingGroups,
        isLoadingCreateGroupAdmin,
        isLoadingDeleteGroup,
        // errorMes,
        errorCreateGroupAdmin,
        errorReceivingGroups,
        errorDeleteGroup,
    } = useSelector(state => state.groupSlice);

    const [values, setValues] = useState({ nameGroup:'', dateStart:'', dateEnd:'', programm: '' });
    const [isValidForm, setIsValidForm] = useState({ nameGroup:'', dateStart:'', dateEnd:'', programm: '' });
    const [isValidCreate, setIsValidCreate] = useState(false)
    const [isValidDelete, setIsValidDelete] = useState(false)

    // заполнение формы данными выбранной программы
    useEffect(()=>{
        setValues({
            nameGroup: groupCard?.name === undefined ? '' : groupCard.name,
            dateStart: groupCard?.dateStart === undefined ? '' : calcDateForm(groupCard.dateStart) ,
            dateEnd: groupCard?.dateEnd === undefined ? '' : calcDateForm(groupCard.dateEnd),
            // assigned: groupCard?.assigned === undefined ? '' : groupCard.assigned,
            programm: groupCard?.programm === undefined ? '' : programms.filter(item => groupCard.programm === item._id),
        });
        setIsValidForm({ nameGroup:'', dateStart:'', dateEnd:'', programm: '' });
        groupCard?.name ? setIsValidDelete(true) : setIsValidDelete(false);
    },[groupCard]);

    // проверка валидности формы
    useEffect(()=>{
        (
            isValidForm.nameGroup === '' && isValidForm.dateStart === '' && isValidForm.dateEnd === '' && isValidForm.programm === '' &&
            values.nameGroup !== '' && values.dateStart !== '' && values.dateEnd !== '' && values.programm !== ''
        ) ? setIsValidCreate(true) : setIsValidCreate(false);
    },[values]);

    // const compilationCountThemeString = (group) => {
    //     let countThemaString = '';
    //     const countBlock = Object.keys(group.blocks).length;
       
    //     if (group?.blocks) {
    //         for (let i = 1; i <= countBlock; i++) {
    //             const countThema = Object.keys(group.blocks[`block${i}`]).length;
    //             countThemaString = countThemaString + countThema + `${countBlock !== i ? ', ' : ''}`;
    //         }    
    //     } else {countThemaString = '0'}
     
    //     return countThemaString
    // }
     const handleCreateGroup = async (e) => {
        e.preventDefault();
        // console.log(values.name);
        await dispatch(sendingGroupAdmin(values));
        await dispatch(receivingGroups());
    }

    const handleDeleteGroup = (e) => {
        e.preventDefault();
        dispatch(removeGroup(groupCard._id))
            .then(()=>{
                dispatch(receivingGroups())
            })
        setValues({ nameGroup:'', dateStart:'', dateEnd:'', programm: '' });
        dispatch(setGroupCard({}));
    }

    const handleCancelForm = (e) => {
        e.preventDefault();
        dispatch(setGroupCard({}));
    };

    const handleChangeSelect = (e) => {
        setValues({...values, programm: e.target.value});
        setIsValidForm({...isValidForm, programm:e.target.validationMessage})
    }
    // console.log(Math.floor(new Date(values.dateStart).getTime() / 1000))
    // console.log(errorCreateGroupAdmin);
    // console.log(isValidDelete);
    // console.log(groupCard);
    // console.log(values);
    // console.log(isValidCreate)
    // console.log(programms)

    return (
        <form className='mainAdminGroupCard'>
            <h1 className='mainAdminGroupCard__heading'>Создание группы</h1>
            <ul className='mainAdminGroupCard__list'>
                {formAdminGroupData.map((input) => 
                    <MainAdminGroupCardInput key={input.id} id={input.id} text={input.text}
                        name={input.name} type={input.type} placeholder={input.placeholder}
                        pattern={input.pattern} title={input.title} disabled={isValidDelete}
                        minLength={input.minLength} maxLength={input.maxLength}
                        required={input.required} min={input.min} max={input.max}
                        values={values} setValues={setValues} 
                        isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                    />
                )}
                <li>
                    <label className='mainAdminGroupCard__assigned'>
                        <p className='mainAdminGroupCard__assignedHeading'>Назначены</p>
                        <input
                            className='mainAdminGroupCard__assignedInput' name='assigned' type='checkbox'
                            checked={groupCard.assigned} value={groupCard.assigned} disabled
                        />
                    </label>    
                </li>
                <li>
                    <label className='mainAdminGroupCard__select'>
                        <p className='mainAdminGroupCard__selectHeading'>Программа группы</p>
                        <select className='mainAdminGroupCard__selectInput' name='programm' disabled={isValidDelete} onChange={handleChangeSelect}>
                            <option className='mainAdminGroupCard__optionDefault' selected={values.programm === ''}>Программа</option>
                            {programms.map((programm) =>
                                <option key={programm._id}
                                    selected={groupCard.programm && groupCard.programm === programm._id}
                                    value={values[programm]}
                                >
                                    {programm.name}
                                </option>
                            )}
                        </select>
                        {/* <input
                            className='mainAdminQuestionnaireCard__moderationInput' name='isModeration' type='checkbox'
                            checked={isModarationState} value={isModarationState} disabled
                        /> */}
                    </label>    
                </li>
            </ul>
         
            {isValidDelete ? 
                <div className='mainAdminGroupCard__buttons'>
                    <button
                        className='mainAdminGroupCard__button'
                        onClick={handleCancelForm}
                        disabled={ isLoadingGroups || isLoadingCreateGroupAdmin || isLoadingDeleteGroup }
                    >
                        сброс
                    </button>
                    <button
                        className='mainAdminGroupCard__button'
                        onClick={handleDeleteGroup}
                        disabled={ groupCard.assigned ||
                            isLoadingGroups || isLoadingCreateGroupAdmin || isLoadingDeleteGroup }
                    >
                        удаление
                    </button>
                </div> :
                <div className='mainAdminGroupCard__buttons'>
                    <button
                        className='mainAdminGroupCard__button'
                        onClick={handleCreateGroup}
                        disabled={!(isValidCreate)
                            //  ||
                            // isLoadingGroups || isLoadingCreateGroupAdmin || isLoadingDeleteGroup
                        }
                    >
                        {isLoadingCreateGroupAdmin ? 'Создание...' : '+создать'}
                    </button>
                </div>
            }
            <p className='mainAdminGroupCard__textError'>
                { errorReceivingGroups !== '' && errorReceivingGroups }
                { errorCreateGroupAdmin !== '' && errorCreateGroupAdmin }
                { errorDeleteGroup !== '' && errorDeleteGroup }
                {/* {errorMes} */}
            </p>
        </form>
    )
}


