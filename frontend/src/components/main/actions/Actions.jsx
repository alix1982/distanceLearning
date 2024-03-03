

export const Actions = () => {
    return (
        <section className='actions' aria-label='Действия'>
            <h2 className='actions__heading'>Порядок Ваших действий</h2>
            <div className='actions__content'>
                <div className='actions__order'>
                    <p className='actions__orderText actions__orderText_decor actions__orderText_decor1'>1. Подать заявку</p>
                    <p className='actions__orderText actions__orderText_decor actions__orderText_decor2'>2. Входное тестирование</p>
                    <p className='actions__orderText actions__orderText_decor actions__orderText_decor3'>3. Основное обучение (3&nbsp;модуля)</p>
                    <p className='actions__orderText actions__orderText_decor actions__orderText_decor4'>4. Итоговая аттестация</p>
                </div>
                <div className='actions__orderLastPoint'>
                    <p className='actions__orderText'>
                        5. После прохождения обучения и успешной сдачи итогового тестирования Вы получаете Удостоверение государственного образца.
                    </p>
                    <img className='actions__orderImg' alt='удостоверение'/>
                    <img className='actions__orderImg' alt='удостоверение'/>
                </div>
            </div>
        </section>

    )
}
