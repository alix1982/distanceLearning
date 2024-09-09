import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formAdminProgrammData } from "../../../share/constant";
import { MainAdminProgrammCardInput } from "./mainAdminProgrammCardInput/MainAdminProgrammCardInput";
import { receivingProgramms, removeProgramm, sendingProgrammAdmin, setProgrammCard } from "../../../store/slice/programmSlice";

export const MainAdminProgrammCard = () => {
    const dispatch = useDispatch();

    const {
        programmCard,
        isLoadingProgramms,
        isLoadingCreateProgrammAdmin,
        isLoadingDeleteProgramm,
        // errorMes,
        errorCreateProgrammAdmin,
        errorReceivingProgramms,
        errorDeleteProgramm,
    } = useSelector(state => state.programmSlice);

    const [values, setValues] = useState({ nameProgramm:'', countBlock:'', countThema:'' });
    const [isValidForm, setIsValidForm] = useState({ nameProgramm:'', countBlock:'', countThema:'' });
    const [isValidCreate, setIsValidCreate] = useState(false)
    const [isValidDelete, setIsValidDelete] = useState(false)

    // заполнение формы данными выбранной программы
    useEffect(()=>{
        setValues({
            nameProgramm: programmCard?.name === undefined ? '' : programmCard.name,
            countBlocks: programmCard?.blocks === undefined ? '' : Object.keys(programmCard.blocks).length,
            countThemes: programmCard?.blocks === undefined ? '' : compilationCountThemeString(programmCard),
        });
        setIsValidForm({ nameProgramm:'', countBlock:'', countThema:'' });
        programmCard?.name ? setIsValidDelete(true) : setIsValidDelete(false);
    },[programmCard]);

    // проверка валидности формы
    useEffect(()=>{
        (
            isValidForm.nameProgramm === '' && isValidForm.countBlock === '' && isValidForm.countThema === '' &&
            values.nameProgramm !== '' && values.countBlock !== '' && values.countThema !== '' 
        ) ? setIsValidCreate(true) : setIsValidCreate(false);
    },[values]);

    const compilationCountThemeString = (programm) => {
        let countThemaString = '';
        const countBlock = Object.keys(programm.blocks).length;
        if (programm?.blocks) {
            for (let i = 1; i <= countBlock; i++) {
                // вычитаем 2 так как считаем только темы и убираем ключи test и name из расчета
                const countThema = Object.keys(programm.blocks[`block${i}`]).length - 2;
                countThemaString = countThemaString + countThema + `${countBlock !== i ? ', ' : ''}`;
            }    
        } else {countThemaString = '0'}
     
        return countThemaString
    }
    
    const handleCreateProgramm = async (e) => {
        e.preventDefault();
        // console.log(values.name);
        await dispatch(sendingProgrammAdmin(values));
        await dispatch(receivingProgramms());
    }

    const handleDeleteProgramm = (e) => {
        e.preventDefault();
        dispatch(removeProgramm(programmCard._id))
            .then(()=>{
                dispatch(receivingProgramms())
            })
        setValues({ nameProgramm:'', countBlock:'', countThema:'' });
        dispatch(setProgrammCard({}));
    }

    const handleCancelForm = (e) => {
        e.preventDefault();
        dispatch(setProgrammCard({}));
    };

    // console.log(errorCreateProgrammAdmin);
    // console.log(isValidDelete);
    // console.log(programmCard);
    // console.log(values);
    
    return (
        <form className='mainAdminProgrammCard'>
            <h1 className='mainAdminProgrammCard__heading'>Создание программы</h1>
            <ul className='mainAdminProgrammCard__list'>
                {formAdminProgrammData.map((input) => 
                    <MainAdminProgrammCardInput key={input.id} id={input.id} text={input.text}
                        name={input.name} type={input.type} placeholder={input.placeholder}
                        pattern={input.pattern} title={input.title} disabled={isValidDelete ? isValidDelete : input.disabled}
                        minLength={input.minLength} maxLength={input.maxLength}
                        required={input.required} min={input.min} max={input.max}
                        values={values} setValues={setValues} 
                        isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                    />
                )}
            </ul>
         
            {isValidDelete ? 
                <div className='mainAdminProgrammCard__buttons'>
                    <button
                        className='mainAdminProgrammCard__button'
                        onClick={handleCancelForm}
                        disabled={ isLoadingProgramms || isLoadingCreateProgrammAdmin || isLoadingDeleteProgramm }
                    >
                        сброс
                    </button>
                    <button
                        className='mainAdminProgrammCard__button'
                        onClick={handleDeleteProgramm}
                        disabled={ programmCard.applies ||
                            isLoadingProgramms || isLoadingCreateProgrammAdmin || isLoadingDeleteProgramm }
                    >
                        удаление
                    </button>
                </div> :
                <div className='mainAdminProgrammCard__buttons'>
                    <button
                        className='mainAdminProgrammCard__button'
                        onClick={handleCreateProgramm}
                        disabled={!(isValidCreate) ||
                            isLoadingProgramms || isLoadingCreateProgrammAdmin || isLoadingDeleteProgramm }
                    >
                        {isLoadingCreateProgrammAdmin ? 'Создание...' : '+создать'}
                    </button>
                </div>
            }
            <p className='mainAdminProgrammCard__textError'>
                { errorReceivingProgramms !== '' && errorReceivingProgramms }
                { errorCreateProgrammAdmin !== '' && errorCreateProgrammAdmin }
                { errorDeleteProgramm !== '' && errorDeleteProgramm }
                {/* {errorMes} */}
            </p>
        </form>
    )
}


