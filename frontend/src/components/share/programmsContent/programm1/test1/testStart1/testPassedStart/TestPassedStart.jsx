// import { useState } from "react";

const TestPassedStart = ({handleNumberQuestionFinish, countSuccessfullyAnswers, countQuestion}) => {
    return (
        <>
            <h3>Тест пройден</h3>
            <p>Результаты прохождения теста: {countSuccessfullyAnswers}/{countQuestion}</p>
            <button onClick={handleNumberQuestionFinish}>Начать обучение</button>
        </>
    )
}

export default TestPassedStart;