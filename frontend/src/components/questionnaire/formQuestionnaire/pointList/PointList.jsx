import { InputForm } from '../../../share/inputForm/InputForm';

export const PointList = ({
    id, name, type, placeholder, pattern, title,
    minLength, maxLength, required, min, max,
    values, setValues, isValidForm, setIsValidForm, text
}) => {

    return (
        <li className='pointList'>
            <p className='pointList__headingId'>{`${id}. `}</p>
            <p className='pointList__heading'>{text}</p>
            <div className='pointList__input'>
                <InputForm
                    name={name} type={type} placeholder={placeholder}
                    // pattern={pattern}
                    title={title}
                    minLength={minLength} maxLength={maxLength}
                    required={required} min={min} max={max}
                    values={values} setValues={setValues}
                    isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                />
            </div>
            
        </li>

    )
}


