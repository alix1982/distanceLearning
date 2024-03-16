import { useState } from 'react';
import { InputForm } from '../inputForm/InputForm';
import { Textarea } from '../textarea/Textarea';

export const Form = () => {
const [values, setValues] = useState({nameInput:'', phone:'', email:'', text:''});
const [isValidForm, setIsValidForm] = useState({nameInput:'', phone:'', email:'', text:''});

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({nameInput:'', phone:'', email:'', text:''});
}
// console.log(values);

    return (
        <form className='form' onSubmit={handleSubmit}>
            <InputForm
                name={'nameInput'} type={"text"} placeholder={"Имя"}
                pattern="^[А-Яа-яЁёa-zA-Z\s\-]{2,50}$" title='error'
                values={values} setValues={setValues}
                isValidForm={isValidForm} setIsValidForm={setIsValidForm}
            />
            <InputForm
                name={'phone'} type={"text"} placeholder={"+7 (999) 999-99-99"}
                pattern="^\+?[1-9][0-9]{7,14}$"
                values={values} setValues={setValues}
                isValidForm={isValidForm} setIsValidForm={setIsValidForm}
            />
            <InputForm
                name={'email'} type={"email"} placeholder={"email@email.ru"}
                // pattern={""}
                values={values} setValues={setValues}
                isValidForm={isValidForm} setIsValidForm={setIsValidForm}
            />
            <Textarea
                name={'text'} type={"text"} placeholder={"Ваш вопрос"}
                // pattern={""}
                values={values} setValues={setValues}
                isValidForm={isValidForm} setIsValidForm={setIsValidForm}
            />
            <button className='form__buttonSubmit'>Отправить</button>
            <p className='form__text'>Нажимая кнопку, принимаю условия политики и пользовательского соглашения</p>
        </form>
    )
}


