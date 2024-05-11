// import { useState } from 'react';
// import { InputForm } from '../share/inputForm/InputForm';
import { FormQuestionnaire } from './formQuestionnaire/FormQuestionnaire';
// import { InputForm } from '../../../share/inputForm/InputForm';
// import { Textarea } from '../textarea/Textarea';

export const Questionnaire = () => {

    return (
        <main className='questionnaire'>
            <h2 className='questionnaire__heading'>
                Анкета
            </h2>
            <FormQuestionnaire/>
        </main>
        
    )
}


