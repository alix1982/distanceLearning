import { useSelector } from "react-redux";

export const InputForm = ({
    name, type, placeholder, pattern, disabled,
    minLength, maxLength, required, min, max,
    values, setValues, isValidForm, setIsValidForm
}) => {

    const {questionnaireCard} = useSelector(state => state.questionnaireSlice);

    const handleChange = (e) => {
        // console.log(e.target.validity.valid);
        // console.log(e.target.validationMessage);
        // console.log(e.target.checked);
        // console.log(e);

        // setValues({...values, [name]: e.target.value});
        // setIsValidForm({...isValidForm, [name]:e.target.validationMessage});

        if (type === 'checkbox') {
            setValues({...values, [name]: e.target.checked});
            setIsValidForm({...isValidForm, [name]:e.target.checked})    
        } else {
            setValues({...values, [name]: e.target.value});
            setIsValidForm({...isValidForm, [name]:e.target.validationMessage})
        }            
        // type === 'checkbox' ? 
        //     setIsValidForm({...isValidForm, [name]:e.target.checked}) : 
        //     setIsValidForm({...isValidForm, [name]:e.target.validationMessage})
    }
    // console.log(snils);
    // console.log(isValidForm[name]);
    return (
        <label className='inputForm'>
            <input className='inputForm__input' 
                name={name}  type={type} placeholder={placeholder}
                pattern={pattern}
                onChange={handleChange}
                value={values[name]}
                checked={values[name]}
                disabled={disabled || (name === 'snils' && questionnaireCard?.snils !== undefined)}
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                min={min}
                max={max}
                // value={type === 'checkbox' ? '' : values[name]}
            />
            {/* {isValidForm[name].length > 0 && */}
                <span className='inputForm__error'>{isValidForm[name]}</span>
            {/* } */}
        </label>
    )
}
