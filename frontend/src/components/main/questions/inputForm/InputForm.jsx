export const InputForm = ({name, type, placeholder, pattern, values, setValues, isValidForm, setIsValidForm}) => {
    
    const handleChange = (e) => {
        // console.log(e.target.validity.valid);
        // console.log(e.target.validationMessage);

        // console.log(e)
        setValues({...values, [name]: e.target.value})
        setIsValidForm({...isValidForm, [name]:e.target.validationMessage})
    }
    // console.log(isValidForm);
    // console.log(isValidForm[name]);
    return (
        <label className='inputForm' aria-label='форма обратной связи'>
            <input className='inputForm__input' 
                name={name}  type={type} placeholder={placeholder}
                pattern={pattern}
                onChange={handleChange}
                value={values[name]}
            />
            {isValidForm[name].length > 0 &&
                <span className='inputForm__error'>{isValidForm[name]}</span>
            }
        </label>
    )
}
