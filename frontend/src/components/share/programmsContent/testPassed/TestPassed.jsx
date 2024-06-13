import { useSelector } from "react-redux";

const TestPassed = ({passedTest, handleNumberQuestionFinish}) => {
    const {blockUserStudy} = useSelector(state => state.programmSlice);

    return (
        <>
            {passedTest ? 
                <>
                    <h3>Тест пройден</h3>
                    {blockUserStudy === 3 ? 
                        <p>Материал курса пройден</p> :
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