import { useDispatch } from "react-redux";
import { setIsModerationState, setQuestionnaireCard } from "../../../store/slice/questionnaireSlice";
import { useEffect, useState } from "react";

export const MainAdminQuestionnairePoint = ({questionnaire, questionnairesSort, activeQuestionnaire }) => {
    
    const dispatch = useDispatch();

    const [isCreateUser, setIsCreateUser] = useState(false);

    useEffect(()=>{
        questionnairesSort.find((item)=> item === questionnaire._id) === undefined ? setIsCreateUser(false) : setIsCreateUser(true)
    },[questionnaire, questionnairesSort]);

    const handleActiveQuestionnaire = async () => {
        await dispatch(setQuestionnaireCard(questionnaire));
        await dispatch(setIsModerationState(questionnaire.isModeration));
    }

    return (
        <li className={
            `mainAdminQuestionnairePoint
            ${questionnaire?._id === activeQuestionnaire?._id ? 'mainAdminQuestionnairePoint_active' : ''}
            ${isCreateUser ? 'mainAdminQuestionnairePoint_createUser' : ''}
            `
        }>
            <button
                className={`mainAdminQuestionnairePoint__button ${isCreateUser ? 'mainAdminQuestionnairePoint_createUser' : ''}`}
                onClick={handleActiveQuestionnaire}
            >
                {`${questionnaire.isModeration ? '+' : '-'}
                ${questionnaire.firstName},
                ${questionnaire.lastName},
                ${questionnaire.patronymic},
                ${questionnaire.workName},
                ${questionnaire.email},
                ${questionnaire.phone},
                ${questionnaire.postWork},
                ${questionnaire.postGoAndChs},
                ${questionnaire.yearPreviousQualification},
                ${questionnaire.education},
                ${questionnaire.snils},
                ${questionnaire.citizenship}`}   
            </button>
        </li>

    )
}


