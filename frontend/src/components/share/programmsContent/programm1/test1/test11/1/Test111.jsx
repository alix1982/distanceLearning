
const Test111 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {

    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>1-1.	Кто (какой орган) осуществляет РУКОВОДСТВО гражданской обороной в Российской Федерации?</h3>
            <label className="test__input">
            <input name="test" type='radio' onChange={()=>handleAnswer(1)} />
            <p>Президент Российской Федерации</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)} />
                <p>Совет безопасности Российской Федерации</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)} />
                <p>Правительство Российской Федерации</p>
            </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default Test111;