
export const MainAdminUserPoint = ({user, setUserCard, activeUser}) => {
    // console.log(activeUser?._id);
    // console.log(user?._id);

    // const handleActiveQuestionnaire = async () => {
    //     await dispatch(setQuestionnaireCard(questionnaire));
    //     await dispatch(setIsModerationState(questionnaire.isModeration));
    //         // .then(()=>{
    //         // });
    // }
    return (
        <li className={`mainAdminUserPoint ${user?._id === activeUser?._id && 'mainAdminUserPoint_active'}`}>
            <button
                className={`mainAdminUserPoint__button`}
                onClick={()=>{setUserCard(user)}}
            >
                {`${user.name},
                ${user.password},
                ${user.snils},
                `}   
                {user.programm.programm1 && 'программа1, '}
                {user.programm.programm2 && 'программа2, '}
                {user.programm.programm3 && 'программа3 '}
            </button>
        </li>

    )
}


