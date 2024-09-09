import { InputForm } from '../../../../share/inputForm/InputForm';

export const MainAdminGroupCardInput = ({
    id, name, type, placeholder, pattern, title, disabled,
    minLength, maxLength, required, min, max,
    isModarationState, values, setValues, isValidForm, setIsValidForm, text
}) => {

    return (
        <li className='mainAdminGroupCardInput'>
            {/* <p className='mainAdminGroupmCardInput__headingId'>{`${id}. `}</p> */}
            <p className='mainAdminGroupCardInput__heading'>{text}</p>
            <div className='mainAdminGroupCardInput__input'>
                <InputForm
                    name={name} type={type} placeholder={placeholder}
                    // pattern={pattern}
                    title={title} disabled={disabled || isModarationState}
                    minLength={minLength} maxLength={maxLength}
                    required={required} min={min} max={max}
                    values={values} setValues={setValues}
                    isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                />
            </div>
        </li>

    )
}


