
const Test114 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {

    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>1-4.	Когда (в каких условиях) для соответствующих органов управления и сил единой системы (РСЧС) вводится режим функционирования ПОВЫШЕННОЙ ГОТОВНОСТИ?</h3>
            <label className="test__input">
            <input name="test" type='radio' onChange={()=>handleAnswer(1)} />
            <p>При отсутствии угрозы возникновения чрезвычайных ситуаций на объектах, территориях или акваториях.</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)} />
                <p>При угрозе возникновения чрезвычайных ситуаций </p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)} />
                <p>При возникновении и ликвидации чрезвычайных ситуаций.</p>
            </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default Test114;