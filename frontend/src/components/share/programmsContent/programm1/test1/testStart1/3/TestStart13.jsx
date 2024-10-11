
const TestStart13 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {
    
    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>3.	Что не относится к задачам гражданской обороны?</h3>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(1)}/>
                <p>Снижение размеров ущерба и потерь от чрезвычайных ситуаций</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)}/>
                <p>Борьба с пожарами, возникающими при военных конфликтах или вследствие этих конфликтов</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)}/>
                <p>Проведение мероприятий по световой маскировке и другим видам маскировки</p>
            </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default TestStart13
;