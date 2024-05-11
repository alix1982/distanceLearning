import { InputForm } from '../../../../share/inputForm/InputForm';

export const MainAdminUserCardInput = ({
    id, name, type, placeholder, pattern, title, disabled, values, setValues, isValidForm, setIsValidForm, text
}) => {

    return (
        <li className='mainAdminUserCardInput'>
            {/* <p className='mainAdminQuestionnaireCardInput__headingId'>{`${id}. `}</p> */}
            <p className='mainAdminUserCardInput__heading'>{text}</p>
            <div className='mainAdminUserCardInput__input'>
                <InputForm
                    name={name} type={type} placeholder={placeholder}
                    // pattern={pattern}
                    title={title} disabled={disabled}
                    values={values} setValues={setValues}
                    isValidForm={isValidForm} setIsValidForm={setIsValidForm}
                />
            </div>
            
        </li>

    )
}


