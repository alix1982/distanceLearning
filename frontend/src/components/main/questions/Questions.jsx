import { ContentQuestions } from './contentQuestions/ContentQuestions';
import { Form } from './form/Form';
// import { InputForm } from './inputForm/InputForm';

export const Questions = () => {
    return (
        <section className='questions' aria-label='форма обратной связи'>
            <h2 className='questions__heading' id='questions'>
                У вас остались вопросы?
            </h2>
            <div className='questions__content'>
                <ContentQuestions/>
                <Form />
            </div>
        </section>
    )
}
