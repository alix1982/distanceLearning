
const Test113 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {
    
    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>1-3.	Какие ОРГАНЫ УПРАВЛЕНИЯ создаются на каждом уровне функционирования единой государственной системы предупреждения и ликвидации чрезвычайных ситуаций (РСЧС)?</h3>
            <label className="test__input">
            <input name="test" type='radio' onChange={()=>handleAnswer(1)}/>
            <p>Основные органы управления, запасные органы управления и вспомогательные органы управления</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)}/>
                <p>Координационные органы, постоянно действующие органы управления и органы повседневного управления</p>
                </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)}/>
                <p>Федеральные органы управления, территориальные органы управления и муниципальные органы управления</p>
                </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default Test113
;