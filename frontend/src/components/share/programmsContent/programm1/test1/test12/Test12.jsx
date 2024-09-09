import { useEffect, useState } from "react";
import TestPassed from "../../../testPassed/TestPassed";
import { useDispatch, useSelector } from "react-redux";
import Test121 from "./1/Test121";
import Test122 from "./2/Test122";
import Test123 from "./3/Test123";
import { updateUserProgramm } from "../../../../../store/slice/userSlice";

const Test12 = ({programmState, setProgrammState, setIsOpenBlock, setThema}) => {
    const {groupUserStudy} = useSelector(state => state.userSlice);
    const dispatch = useDispatch();
    const countQuestion = 3; // количество вопросов в тесте
    const successfullyAnswers = [1, 2, 3] // массив правильных ответов

    const [numberQuestion, setNumberQuestion] = useState(1); // номер вопроса
    const [answersTest, setAnswersTest] = useState([]); // массив с ответами пользователя
    const [passedTest, setPassedTest] = useState(groupUserStudy.programm.blocks.block2.test.passed); // статус прохождения теста

    // проверка ответов пользователя и изменение статуса прохождения теста
    useEffect(()=>{
        !passedTest ?
            (successfullyAnswers.length === answersTest.length &&
                successfullyAnswers.every((element, index) => element === answersTest[index]) ?
                    setPassedTest(true) :
                    setPassedTest(false)) :
            setPassedTest(passedTest);
    },[numberQuestion]);

    // обновления статуса прохождения тестировнаия в блоке, отправка даты и статуса теста на сервер
    useEffect(()=>{
        if (passedTest && !groupUserStudy.programm.blocks.block2.test.passed) {
            dispatch(updateUserProgramm({
                id: groupUserStudy.group,
                thema: 0,
                block: 2,
                keyChange: 'test'
            }));
        }
    },[passedTest]);

    // преключение вопросов теста
    const handleNumberQuestion = () => {
        setNumberQuestion(numberQuestion + 1)
    }

    // окончание теста
    const handleNumberQuestionFinish = () => {
        // let arr = [false, false, false];
        // blockUserStudy === 3 ? arr[blockUserStudy-1] = true : arr[blockUserStudy] = true;
        // setIsOpenBlock(arr);
        // setThema(1);
        // dispatch(setBlock(blockUserStudy));
    }
    
    return (
        <>
            {numberQuestion === 1 && !passedTest ?
                <Test121
                    handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
                    setAnswersTest={setAnswersTest} answersTest={answersTest}
                /> :
            numberQuestion === 2 && !passedTest ?
                <Test122
                    handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
                    setAnswersTest={setAnswersTest} answersTest={answersTest}
                /> :
            numberQuestion === 3 && !passedTest ?
                <Test123
                    handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
                    setAnswersTest={setAnswersTest} answersTest={answersTest}
                /> :
            // возможно сделать через switch - case
            // numberQuestion === 4 ?
            //     <Test114
            //         handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
            //         setAnswersTest={setAnswersTest} answersTest={answersTest}
            //     /> :
            (numberQuestion >= countQuestion + 1 || passedTest) &&
                <TestPassed passedTest={passedTest} handleNumberQuestionFinish={handleNumberQuestionFinish}/>}
        </>
    )
}

export default Test12;