
const TestStart17 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {

    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>7.	На объекте при заражении радиоактивными веществами проводится:</h3>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(1)} />
                <p>Дезактивация</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)} />
                <p>Дезинфекция</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)} />
                <p>Дегазация</p>
            </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default TestStart17;