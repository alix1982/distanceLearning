
const TestStart12 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {
    
    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }

    return (
        <>
            <h3>2.	Кто является в организации руководителем гражданской обороны?</h3>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(1)}/>
                <p>Председатель КЧС и ОПБ муниципального образования</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)}/>
                <p>Руководитель организации</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)}/>
                <p>Начальник органа, специально уполномоченного решать задачи ГО и задачи по предупреждению и ликвидации ЧС на территории муниципального образования (организации)</p>
            </label>
            <button onClick={handleNumberQuestion} >Ответить</button>
        </>
                
    )
}

export default TestStart12;