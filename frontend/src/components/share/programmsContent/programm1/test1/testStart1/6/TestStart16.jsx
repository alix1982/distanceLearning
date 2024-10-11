
const TestStart16 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {

    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>6.	С какой категорией работников проводится вводный инструктаж по гражданской обороне?</h3>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(1)} />
                <p>Со всеми работниками</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)} />
                <p>С вновь принятыми работниками</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)} />
                <p>С работниками, входящими в состав нештатных формирований</p>
            </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default TestStart16;