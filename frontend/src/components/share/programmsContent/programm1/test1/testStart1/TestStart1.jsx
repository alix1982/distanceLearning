import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProgramm } from "../../../../../store/slice/userSlice";
import TestStart11 from "./1/TestStart11";
import TestStart12 from "./2/TestStart12";
import TestStart13 from "./3/TestStart13";
import TestPassedStart from "./testPassedStart/TestPassedStart";

const TestStart1 = () => {
    const {groupUserStudy} = useSelector(state => state.userSlice);
    const dispatch = useDispatch();
    const countQuestion = 3; // количество вопросов в тесте
    const successfullyAnswers = [1, 2, 3] // массив правильных ответов

    const [numberQuestion, setNumberQuestion] = useState(1); // номер вопроса
    const [answersTest, setAnswersTest] = useState([]); // массив с ответами пользователя
    const [countSuccessfullyAnswers, setCountSuccessfullyAnswers] = useState(0); // количество правильных ответов теста

    // проверка ответов пользователя и изменение статуса прохождения теста
    useEffect(()=>{
        if (successfullyAnswers.length === answersTest.length) {
            let count = 0;
            successfullyAnswers.map((element, index) => 
                    element === answersTest[index] &&  count++
            );
            setCountSuccessfullyAnswers(count);
        }
    },[numberQuestion]);

    // преключение вопросов теста
    const handleNumberQuestion = () => {
        setNumberQuestion(numberQuestion + 1)
    };

    // окончание теста и обновления статуса прохождения тестировнаия в блоке, отправка даты и статуса теста на сервер
    const handleNumberQuestionFinish = () => {
        if (!groupUserStudy.programm.startTest.passed) {
            dispatch(updateUserProgramm({
                id: groupUserStudy.group,
                thema: 0,
                block: 0,
                keyChange: 'testStart'
            }));
        }
    }
    
    return (
        <>
            {numberQuestion === 1 ?
                <TestStart11
                    handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
                    setAnswersTest={setAnswersTest} answersTest={answersTest}
                /> :
            numberQuestion === 2 ?
                <TestStart12
                    handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
                    setAnswersTest={setAnswersTest} answersTest={answersTest}
                /> :
            numberQuestion === 3 ?
                <TestStart13
                    handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
                    setAnswersTest={setAnswersTest} answersTest={answersTest}
                /> :
            // возможно сделать через switch - case
            // numberQuestion === 4 ?
            //     <TestStart14
            //         handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
            //         setAnswersTest={setAnswersTest} answersTest={answersTest}
            //     /> :
            (numberQuestion >= countQuestion + 1) &&
                <TestPassedStart
                    handleNumberQuestionFinish={handleNumberQuestionFinish}
                    countSuccessfullyAnswers={countSuccessfullyAnswers}
                    countQuestion={countQuestion}
                />}
        </>
    )
}

export default TestStart1;