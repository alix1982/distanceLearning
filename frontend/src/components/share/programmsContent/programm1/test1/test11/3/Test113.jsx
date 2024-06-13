
const Test113 = ({handleNumberQuestion, index, setAnswersTest, answersTest}) => {
    
    const handleAnswer = (number) => {
        setAnswersTest([...answersTest.slice(0, index), number,...answersTest.slice(index + 1)])
    }
    
    return (
        <>
            <h3>1-3.	Укажите правильное определение основного понятия «ГРАЖДАНСКАЯ ОБОРОНА»:</h3>
            <label className="test__input">
            <input name="test" type='radio' onChange={()=>handleAnswer(1)}/>
            <p>Организационные и специальные действия, осуществляемые в области гражданской обороны в соответствии с федеральными законами и иными нормативными правовыми актами РФ.</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(2)}/>
                <p>Система мероприятий по подготовке к защите и по защите населения, материальных и культурных ценностей на территории Российской Федерации от опасностей, возникающих при военных конфликтах или вследствие этих конфликтов, а также при чрезвычайных ситуациях природного и техногенного характера.</p>
            </label>
            <label className="test__input">
                <input name="test" type='radio' onChange={()=>handleAnswer(3)}/>
                <p>Система мероприятий по обучению населения действиям в случае угрозы возникновения и возникновения опасностей при военных конфликтах или вследствие этих конфликтов, при чрезвычайных ситуациях природного и техногенного характера</p>
            </label>
            <button onClick={handleNumberQuestion}>Ответить</button>
        </>
                
    )
}

export default Test113
;