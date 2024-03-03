// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Programm1 from './programm1/Programm1';
// import Programm2 from './programm2/Programm2';
// import Programm3 from './programm3/Programm3';
// import Header from './components/header/Header';
import Header from './components/header/Header';
// import {Main} from './main/Main'
import {Main} from './components/main/Main'

function App() {
  // const [programm, setProgramm] = useState(0);
  // const renderProgramm = (prog) => {
  //   // console.log(programm);
  //   switch (prog) {
  //     case 1:
  //       // console.log('ok');
  //       return <Programm1/>;
  //     case 2:
  //       return <Programm2/>;
  //     case 3:
  //       return <Programm3/>;
  //     default:
  //       return;
  //   }
  // }
  return (
    <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <Main/>
            {/* <Footer/> */}
          </>
        }/>

        {/* <Route path="/profile" element={
          <>
            <ProtectedRoute loggedIn={loggedIn} component={Header}
               isNavigationPopupOpen = {isNavigationPopupOpen}
               onPopupNavigation = {handleOnPopupNavigation} onClose = {closeAllPopups}
               onCloseOverlay = {onCloseOverlay} offNavigation = {"Disabled"}
               auth = {"Auth"}
            />
            <ProtectedRoute loggedIn={loggedIn} component={Profile}
              onClickPopupWithForm={onClickPopupWithForm} updateUser={updateUser}
            />
          </>
        }/> */}

        {/* <Route path="/signin" element={
          <>
            <Header
              isNavigationPopupOpen = {isNavigationPopupOpen}
              onPopupNavigation = {handleOnPopupNavigation} onClose = {closeAllPopups}
              onCloseOverlay = {onCloseOverlay} offNavigation = {"Disabled"}
              auth = {"Auth"}
            />
            <Login onClickPopupWithForm={onClickPopupWithForm} apiLogin={apiLogin}/>
          </>
        }/> */}

        {/* <Route path="/signup" element={
          <>
            <Header
              isNavigationPopupOpen = {isNavigationPopupOpen}
              onPopupNavigation = {handleOnPopupNavigation} onClose = {closeAllPopups}
              onCloseOverlay = {onCloseOverlay} offNavigation = {"Disabled"}
              auth = {"Auth"}
            />
            <Register onClickPopupWithForm={onClickPopupWithForm} apiRegister={apiRegister}/>
          </>
        }/> */}
{/* 
        <Route path="/no-route" element={
          <>
            <NoRoute/>
          </>
        }/> */}

      </Routes>
    // <div className="app">
    //   <header className="header">
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //     <h1>Дистанционное обучение</h1>
    //   </header>
    //   <main>
    //     <h2>Программы обучения</h2>
    //     <ul>
    //       <li>
    //         <button onClick={()=>{setProgramm(1)}}>Программа 1</button>
    //       </li>
    //       <li>
    //         <button onClick={()=>{setProgramm(2)}}>Программа 2</button>
    //       </li>
    //       <li>
    //         <button onClick={()=>{setProgramm(3)}}>Программа 3</button>
    //       </li>
    //     </ul>
    //     {renderProgramm(programm)}
    //     {/* {programm === 1 ? <Programm1/> : ((programm === 2) ? <Programm2/> : <Programm3/>)} */}
 
    //   </main>
    // </div>
  );
}

export default App;
