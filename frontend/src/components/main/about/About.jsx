import advantage1 from '../../../image/main/about_advantage1.jpg';
import advantage2 from '../../../image/main/about_advantage2.jpg';
import advantage3 from '../../../image/main/about_advantage3.jpg';
import advantage4 from '../../../image/main/about_advantage4.jpg';
import teacher1 from '../../../image/main/about_teacher1.jpg';
import teacher2 from '../../../image/main/about_teacher2.jpg';

export const About = () => {
    return (
        <section className='about' aria-label='Достоинства'>
            <div className='about__advantages'>
                <h2 className='about__heading'>Почему выбирают нас</h2>
                <ul className='about__advantageListPhoto'>
                    <li className='about__advantagePointPhoto'>
                        <img src={advantage1} className='about__advantagePointImg' alt='фото класса'/>
                    </li>
                    <li className='about__advantagePointPhoto'>
                        <img src={advantage2} className='about__advantagePointImg' alt='фото класса'/>
                    </li>
                    <li className='about__advantagePointPhoto'>
                        <img src={advantage3} className='about__advantagePointImg' alt='фото класса'/>
                    </li>
                    <li className='about__advantagePointPhoto'>
                        <img src={advantage4} className='about__advantagePointImg' alt='фото класса'/>
                    </li>
                </ul>
                <ul className='about__advantageListText'>
                    <li className='about__advantagePointText'>обучаем сотрудников с 2010 года</li>
                    <li className='about__advantagePointText'>2000 специалистов получили наши удостоверения</li>
                    <li className='about__advantagePointText'>доступ к материалам 24/7 в период обучения</li>
                    <li className='about__advantagePointText'>доступ к обучению из любой точки мира</li>
                    <li className='about__advantagePointText'>
                        для вас собрана самая актуальная информация по обучению, с учётом последних изменений в законодательстве
                    </li>
                </ul>
            </div>
            <div className='about__teachers'>
                <h2 className='about__heading'>Наши преподаватели</h2>
                {/* <div className='about__teacher'>
                    <img src={teacher1} className='about__teacherPointImg' alt='фото преподователя'/>
                    <div className='about__teacherPointContent'>
                        <h3 className='about__teacherPointHeading'>Максимова Олеся Владимировна.</h3>
                        <p className='about__teacherPointText'>Начальник городских курсов ГО.<br/>Преподавательский стаж 3 года.</p>
                    </div>
                </div>
                <div className='about__teacher'>
                    <img src={teacher2} className='about__teacherPointImg' alt='фото преподователя'/>
                    <div className='about__teacherPointContent'>
                        <h3 className='about__teacherPointHeading'>Наумова Наталья Александровна.</h3>
                        <p className='about__teacherPointText'>Преподаватель по курсу ГО.<br/>Преподавательский стаж 3 года.</p>
                    </div>
                </div> */}
                <ul className='about__teachersList'>
                    <li className='about__teacherPoint'>
                        <img src={teacher1} className='about__teacherPointImg' alt='фото преподователя'/>
                        <div className='about__teacherPointContent'>
                            <h3 className='about__teacherPointHeading'>Максимова Олеся Владимировна.</h3>
                            <p className='about__teacherPointText'>Начальник городских курсов ГО.<br/>Преподавательский стаж 3 года.</p>
                        </div>
                    </li>
                    <li className='about__teacherPoint'>
                        <img src={teacher2} className='about__teacherPointImg' alt='фото преподователя'/>
                        <div className='about__teacherPointContent'>
                            <h3 className='about__teacherPointHeading'>Наумова Наталья Александровна.</h3>
                            <p className='about__teacherPointText'>Преподаватель по курсу ГО.<br/>Преподавательский стаж 3 года.</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            
        </section>

    )
}
