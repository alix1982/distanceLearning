

export const InputForm = ({name, type, placeholder, pattern}) => {
    return (
        <label className='inputForm' aria-label='форма обратной связи'>
            <input name={name} className='inputForm__input' type={type} placeholder={placeholder} pattern={pattern}/>
            <span className='inputForm__error'>Ошибка валидации</span>
        </label>
    )
}
