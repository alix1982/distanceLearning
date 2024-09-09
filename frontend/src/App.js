import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import { Main } from './components/main/Main'
import Footer from './components/footer/Footer';
import { Questionnaire } from './components/questionnaire/Questionnaire';
import { Signin } from './components/signin/Signin';
import Adminka from './components/adminka/Adminka';
import LkUser from './components/lkUser/LkUser';
import Programms from './components/programms/Programms';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { isAuthAdmin, isAuth } = useSelector(state => state.authSlice);

  return (
    <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <Main/>
            <Footer/>
          </>
        }/>
        <Route path="/questionnaire" element={
          <>
            <Header/>
            <Questionnaire/>
            <Footer/>
          </>
        }/>
        <Route path="/signin" element={
          <>
            <Header/>
            <Signin/>
            <Footer/>
          </>
        }/>
        <Route path="/lkUser" element={
          <>
            <ProtectedRoute loggedIn={isAuth} component={Header}/>
            <ProtectedRoute loggedIn={isAuth} component={LkUser}/>
            <ProtectedRoute loggedIn={isAuth} component={Footer}/>
          </>
        }/>
        <Route path="/admin" element={
          <ProtectedRoute loggedIn={isAuthAdmin} component={Adminka}/>
        }/>
        <Route path="/programm" element={
          <>
            <ProtectedRoute loggedIn={isAuth} component={Header}/>
            <ProtectedRoute loggedIn={isAuth} component={Programms}/>
            <ProtectedRoute loggedIn={isAuth} component={Footer}/>
          </>
        }/>
        {/* <Route path="/programm2" element={
          <>
            <ProtectedRoute loggedIn={isAuth} component={Header}/>
            <ProtectedRoute loggedIn={isAuth} component={Programms}/>
            <ProtectedRoute loggedIn={isAuth} component={Footer}/>
          </>        }/>
        <Route path="/programm3" element={
          <>
            <ProtectedRoute loggedIn={isAuth} component={Header}/>
            <ProtectedRoute loggedIn={isAuth} component={Programms}/>
            <ProtectedRoute loggedIn={isAuth} component={Footer}/>
          </>
        }/> */}
{/* 
        <Route path="/no-route" element={
          <>
            <NoRoute/>
          </>
        }/> */}

      </Routes>
  );
}

export default App;
