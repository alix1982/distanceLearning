
const TestStart15 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {

    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>5.	Какой предупредительный сигнал для населения означает звучание сирены, производственных гудков и т.д.?</h3>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(1)} />
                <p>«Внимание всем!»</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)} />
                <p>«Воздушная тревога!»</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)} />
                <p>«Возникновение ЧС!»</p>
            </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default TestStart15;