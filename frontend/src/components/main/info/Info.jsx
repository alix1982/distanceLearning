
export const Info = () => {
    return (
        <section className='info' aria-label='общая информация'>
            <div className='info__content'>
                <h2 className='info__heading'>Платформа для обучения</h2>
                <p className='info__headingDecor'>ГО и ЧС</p>
                <p className='info__text'>
                    Здесь вы сможете пройти необходимую программу обучения по ГО и ЧС.
                    <br/>
                    Дистанционное образование позволяет подготовить специалистов по безопасности и охране труда в удобном формате (необходимо лишь иметь в расположении телефон или ноутбук).
                </p>
            </div>
            <h3 className='info__headingList'>Вы всегда можете обратиться к нам лично:</h3>
            <ul className='info__list'>
                <li className='info__point'>Режим работы курсов гражданской обороны: ПН-ПТ — 08.30 — 16.30, обед 12.15 — 13.15</li>
                <li className='info__point'>Начальник курсов гражданской обороны: Максимова Олеся Владимировна</li>
                <li className='info__point'>Телефон курсов гражданской обороны: (8184) 55-13-77;</li>
                <li className='info__point'>Е-mail курсов гражданской обороны: sgcc.kursy@mail.ru.</li>
            </ul>
        </section>
    )
}
