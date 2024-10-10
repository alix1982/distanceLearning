import { useState } from "react";
import { useSelector } from "react-redux";

const TestPassed = ({passedTest, handleNumberQuestionFinish}) => {
    // const {blockUserStudy} = useSelector(state => state.programmUserSlice);
    const {groupUserStudy} = useSelector(state => state.userSlice);
    const [isEndEducation, setIsEndEducation] = useState(false); // статус обучения по тестам в блоках

    let countBloks = Object.keys(groupUserStudy.programm.blocks).length;
    let countTestTrue = 0;
    for (let i = 0; i < countBloks; i++) {
        groupUserStudy.programm.blocks[`block${i+1}`].test.passed && countTestTrue++
        countBloks === countTestTrue && setIsEndEducation(true)
    }

    return (
        <>
            {passedTest ? 
                <>
                    <h3>Тест пройден</h3>
                    {isEndEducation ? 
                        <p>Материал курса пройден, переходите к итоговому тесту</p> :
                        <>
                            <p>Материал блока пройден, переходите к следующему блоку</p>
                            <button onClick={handleNumberQuestionFinish}>Продолжить обучение</button>
                        </>
                    }
                    
                </> : 
                <>
                    <h3>Тест не пройден</h3>
                    <p>Изучите материал блока повторно и попробуйте пройти тестирование заново</p>
                    {/* <button>Пройти тему заново</button> */}
                </>
            
            }
        </>
                
    )
}

export default TestPassed;