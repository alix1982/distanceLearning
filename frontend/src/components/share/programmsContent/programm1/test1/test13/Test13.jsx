import { useEffect, useState } from "react";
import TestPassed from "../../../testPassed/TestPassed";
import { useDispatch, useSelector } from "react-redux";
import { setBlock } from "../../../../../store/slice/programmSlice";
import Test131 from "./1/Test131";
import Test132 from "./2/Test132";
import Test133 from "./3/Test133";
import { updateUserProgramm } from "../../../../../store/slice/userSlice";

const Test13 = ({programmState, setProgrammState, setIsOpenBlock, setThema}) => {
    const dispatch = useDispatch();
    const countQuestion = 3; // количество вопросов в тесте
    const successfullyAnswers = [1, 2, 3] // массив правильных ответов

    const {programmUserStudy, blockUserStudy} = useSelector(state => state.programmSlice);

    const [numberQuestion, setNumberQuestion] = useState(1); // номер вопроса
    const [answersTest, setAnswersTest] = useState([]); // массив с ответами пользователя
    const [passedTest, setPassedTest] = useState(programmState[`block${blockUserStudy}`].test.passed); // статус прохождения теста

    // проверка ответов пользователя и изменение статуса прохождения теста
    useEffect(()=>{
        !programmState[`block${blockUserStudy}`].test.passed ?
            (successfullyAnswers.length === answersTest.length &&
                successfullyAnswers.every((element, index) => element === answersTest[index]) ?
                    setPassedTest(true) :
                    setPassedTest(false)) :
            setPassedTest(programmState[`block${blockUserStudy}`].test.passed);
    },[numberQuestion]);

    // обновления статуса прохождения тестировнаия в блоке, отправка даты и статуса теста на сервер
    useEffect(()=>{
        if (passedTest) {
            let data = {...programmState};
            let dataBlock = {...data[`block${blockUserStudy}`]};
            let test = {...dataBlock.test};

            test.time = new Date().getTime();
            test.passed = passedTest;
            dataBlock.test = test;
            data[`block${blockUserStudy}`] = dataBlock;

            setProgrammState(data);
        }
    },[passedTest]);

    // преключение вопросов теста
    const handleNumberQuestion = () => {
        setNumberQuestion(numberQuestion + 1)
    }

    // окончание теста
    const handleNumberQuestionFinish = () => {
        let arr = [false, false, false];
        blockUserStudy === 3 ? arr[blockUserStudy-1] = true : arr[blockUserStudy] = true;
        setIsOpenBlock(arr);
        setThema(1);
        blockUserStudy < 3 && dispatch(setBlock(blockUserStudy));
    }
    
    return (
        <>
            {numberQuestion === 1 && !programmState[`block${blockUserStudy}`].test.passed ?
                <Test131
                    handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
                    setAnswersTest={setAnswersTest} answersTest={answersTest}
                /> :
            numberQuestion === 2 && !programmState[`block${blockUserStudy}`].test.passed ?
                <Test132
                    handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
                    setAnswersTest={setAnswersTest} answersTest={answersTest}
                /> :
            numberQuestion === 3 && !programmState[`block${blockUserStudy}`].test.passed ?
                <Test133
                    handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
                    setAnswersTest={setAnswersTest} answersTest={answersTest}
                /> :
            // возможно сделать через switch - case
            // numberQuestion === 4 ?
            //     <Test114
            //         handleNumberQuestion={handleNumberQuestion} index={numberQuestion-1}
            //         setAnswersTest={setAnswersTest} answersTest={answersTest}
            //     /> :
            (numberQuestion >= countQuestion + 1 || programmState[`block${blockUserStudy}`].test.passed) &&
                <TestPassed passedTest={passedTest} handleNumberQuestionFinish={handleNumberQuestionFinish}/>}
        </>
    )
}

export default Test13;