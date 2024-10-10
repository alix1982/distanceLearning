
const Test116 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {

    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>1-6.	К РЕГИОНАЛЬНОЙ ЧС относится чрезвычайная ситуация, в результате которой:</h3>
            <label className="test__input">
            <input name="test" type='radio' onChange={()=>handleAnswer(1)} />
            <p>Пострадало не более 50 человек; либо материальный ущерб составляет не более 12 млн. руб. и зона ЧС не выходит за пределы территории одного муниципального образования  </p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)} />
                <p>Пострадало свыше 10, но не более 50 человек; либо материальный ущерб составляет не более 300 тыс.. руб. и зона ЧС не выходит за пределы населенного пункта, города, района </p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)} />
                <p>Пострадало свыше 50, но не более 500 человек; либо материальный ущерб составляет 180 млн. руб., но не более 1,8 млрд. руб. и зона ЧС не выходит за пределы территории одного субъекта </p>
            </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default Test116;