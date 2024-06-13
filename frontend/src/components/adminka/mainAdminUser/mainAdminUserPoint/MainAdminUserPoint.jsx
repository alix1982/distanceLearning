
export const MainAdminUserPoint = ({user, setUserCard, activeUser}) => {

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
                {user.programm.programm1.assigned && 'программа1, '}
                {user.programm.programm2.assigned && 'программа2, '}
                {user.programm.programm3.assigned && 'программа3 '}
            </button>
        </li>

    )
}


