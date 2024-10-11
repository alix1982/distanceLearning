
const TestStart111 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {

    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>11.	Когда в организациях создаются эвакуационные комиссии?</h3>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(1)} />
                <p>В мирное время</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)} />
                <p>При объявлении мобилизации</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)} />
                <p>При введении военного положения</p>
            </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default TestStart111;