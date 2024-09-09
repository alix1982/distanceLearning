import { useState } from 'react';

export const MainAdminUserPointProgramm = ({ groupUser, userProgramm }) => {
    const [isContentProgramm, setIsContentProgramm] = useState(false);

    const countBlock = userProgramm ? Object.keys(userProgramm.programm.blocks).length : 0;
    let arrCountBlock = [];
    for (let i = 1; i <= countBlock; i++) {
        const xxx = userProgramm.programm.blocks[`block${i}`]?.test.passed;
        arrCountBlock = [...arrCountBlock, xxx];
    }
    
    // console.log(countBlock);
    // console.log(userProgramm.programm.blocks[`block${i}`]?.test.passed)
    // console.log(arrCountBlock);
    return (
        <li className='mainAdminUserPoint__point'>
            <button  className='mainAdminUserPoint__pointButton' onClick={()=>setIsContentProgramm(!isContentProgramm)}>{groupUser.name}</button>
            {(isContentProgramm && countBlock) &&
                <>
                    <p className='mainAdminUserPoint__pointText'>Начало: 
                        {userProgramm.programm.blocks.block1.thema1.timestart === 0 ? 
                            ' не начата' :
                            userProgramm.programm.blocks.block1.thema1.timestart
                        }
                    </p>
                    <p className='mainAdminUserPoint__pointText'>Окончание: 
                        {userProgramm.programm?.finallyTest.time === 0 ? 
                            ' не пройдена' : 
                            userProgramm.programm?.finallyTest.time}
                    </p>
                    <p className='mainAdminUserPoint__pointText'>Прогресс:
                        {arrCountBlock.map((item, index)=>
                                <span key={index} className={`${item && 'mainAdminUserPoint__pointProgress_passed'}`}>
                                    {` ${index+1} ${(index+1 === countBlock) ? '' : '-> '}`}
                                </span>
                        )}
                    </p>

                </>
            }
        </li>

    )
}


