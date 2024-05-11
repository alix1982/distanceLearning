import logo from '../../../image/logo2.jpg';

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

function FooterAdmin() {
    // const dispatch = useDispatch();
    // const {questionnaires} = useSelector(state => state.questionnaireSlice);
    // console.log(questionnaires)
    // const navigation = useNavigate();
    // function handleRequest () {
    //     navigation('/questionnaire')
    // }
    // useEffect(()=>{
    //     dispatch(receivingQuestionnaires())
    // },[])
 
    return (
        <footer className='footerAdmin' aria-label='подвал админки'>
            <img className='footerAdmin__logo' width={"200px"} src={logo} alt='логотип'/>
        </footer>
    )
}

export default FooterAdmin;