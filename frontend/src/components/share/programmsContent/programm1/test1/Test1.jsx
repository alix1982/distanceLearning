// import { useSelector } from "react-redux";
// import Test11 from "./test11/Test11";
// import ProgrammDev from "../../programmDev/ProgrammDev";
// import Test12 from "./test12/Test12";
// import Test13 from "./test13/Test13";

//  удалить компонент  и его стили и импортом в индекс css

const Test1 = ({programmState, setProgrammState, setIsOpenBlock}) => {
    // const {programmUserStudy, blockUserStudy} = useSelector(state => state.programmUserSlice);

    return (
        <>
            {/* {
                blockUserStudy === 1 ?
                    <Test11 setIsOpenBlock={setIsOpenBlock} programmState={programmState} setProgrammState={setProgrammState}/> :
                blockUserStudy === 2 ?
                    <Test12 setIsOpenBlock={setIsOpenBlock} programmState={programmState} setProgrammState={setProgrammState}/> :
                blockUserStudy === 3 ?
                    <Test13 setIsOpenBlock={setIsOpenBlock} programmState={programmState} setProgrammState={setProgrammState}/> :
                <ProgrammDev/>
            } */}
        </>
    )
}

export default Test1;