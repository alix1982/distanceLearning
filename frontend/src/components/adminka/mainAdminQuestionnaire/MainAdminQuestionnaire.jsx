import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { receivingQuestionnaires } from '../../store/slice/questionnaireSlice';
import { MainAdminQuestionnairePoint } from './mainAdminQuestionnairePoint/MainAdminQuestionnairePoint';
import { MainAdminQuestionnaireCard } from './mainAdminQuestionnaireCard/MainAdminQuestionnaireCard';

// import { useNavigate } from 'react-router-dom';

function MainAdminQuestionnaire() {

    const {questionnaireCard, errorReceivingQuestionnaires, isLoadingQuestionnaires} = useSelector(state => state.questionnaireSlice);

    const [activeQuestionnaire, setActiveQuestionnaire] = useState({});
    const [questionnairesSort, setQuestionnairesSort] = useState([]);

    // const [isSortQuestionnaires, setIsSortQuestionnaires] = useState(false);

    // const dispatch = useDispatch();
    // const { isAuthAdmin } = useSelector(state => state.authSlice);
    const {questionnaires} = useSelector(state => state.questionnaireSlice);
    const {users} = useSelector(state => state.userSlice);

    // console.log(questionnaireCard)
    // const navigation = useNavigate();
    // function handleRequest () {
        //     navigation('/questionnaire')
        // }
    // useEffect(()=>{
    //     setQuestionnairesSort(questionnaires);
    // },[questionnaires]);

    useEffect(()=>{
        setActiveQuestionnaire(questionnaires?.find((item)=>item._id === questionnaireCard?._id))
    },[questionnaireCard]);

    useEffect(()=>{
        let arrSort = [];
        arrSort = users ?
            users.map((item)=>
                questionnaires.find((user) => user.snils === item.snils)?._id
            ) : []
        setQuestionnairesSort(arrSort)
    },[questionnaires, users]);

    // useEffect(()=>{
    //     isAuthAdmin && dispatch(receivingQuestionnaires())
    // },[isAuthAdmin])

    return (
        <main className='mainAdminQuestionnaire'>
            <div>
                {/* <button onClick={()=>{setIsSortQuestionnaires(!isSortQuestionnaires)}}>
                    {isSortQuestionnaires ? 'все' : 'анкеты без пользователя'}
                </button> */}
                {errorReceivingQuestionnaires.length > 0 ? <p>{errorReceivingQuestionnaires}</p> :
                        (isLoadingQuestionnaires ? <p>Загрузка ...</p> :
                            <ol className='mainAdminQuestionnaire__list'>
                                {questionnaires ? questionnaires.map((questionnaire, index)=>
                                    <MainAdminQuestionnairePoint key={index}
                                        questionnaire={questionnaire} questionnairesSort={questionnairesSort}
                                        // setQuestionnaireCard={setQuestionnaireCard}
                                        activeQuestionnaire={activeQuestionnaire}
                                    />
                                ) : <p>Анкеты не найдены</p>}
                            </ol>  
                        )
                }    
            </div>
            
            
            <MainAdminQuestionnaireCard questionnairesSort={questionnairesSort} />
        </main>
    )
}

export default MainAdminQuestionnaire;