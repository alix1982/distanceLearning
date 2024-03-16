
export const Textarea = ({name, type, placeholder, pattern, values, setValues, isValidForm, setIsValidForm}) => {
    
    const handleChange = (e) => {
        // console.log(e.target.validity.valid);
        // console.log(e.target.validationMessage);

        // console.log(e)
        setValues({...values, [name]: e.target.value})
        setIsValidForm({...isValidForm, [name]:e.target.validationMessage})
    }
    // console.log(isValidForm);
    // console.log(isValidForm[name])
    return (
        <label className='textareaForm' aria-label='форма обратной связи'>
            <textarea className='textareaForm__input' 
                name={name}  type={type} placeholder={placeholder}
                pattern={pattern}
                onChange={handleChange}
                value={values[name]}
                ></textarea>
            {isValidForm[name].length > 0 &&
                <span className='textareaForm__error'>{isValidForm[name]}</span>
            }
        </label>
    )
}
