import img5 from '../../../../../../image/programm/programm1/img_thema1_2_1.png';
import img6 from '../../../../../../image/programm/programm1/img_theme1_2_2.png';
import img7 from '../../../../../../image/programm/programm1/img_thema1_2_3.png';
import img8 from '../../../../../../image/programm/programm1/img_thema1_2_4.png';
import useObserver from '../../../../customHook/useObserver';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsEndThema, setIsStartThema } from '../../../../../store/slice/userSlice';

const Thema132 = () => {

    const dispatch = useDispatch();

    let startThema = useObserver('startThema').show;
    let watchStart = useObserver('startThema').setWatch
    let endThema = useObserver('endThema').show;
    let watchEnd = useObserver('endThema').setWatch
    useEffect(()=>{
        watchStart();
        watchEnd();
        dispatch(setIsStartThema(startThema));
        dispatch(setIsEndThema(endThema));
    },[startThema, endThema])
    return (
        <>
            <p className='startThema'>В соответствии со ст. 11 Федерального закона РФ от 12 февраля 1998 года №28-ФЗ «О гражданской обороне в Российской Федерации» руководство ГО в РФ осуществляет Правительство РФ.</p>
            <p>Руководство ГО на территориях субъектов РФ и МО осуществляют соответственно главы органов исполнительной власти субъектов РФ и руководители органов местного самоуправления.</p>
            <p>Руководство ГО в федеральных органах исполнительной власти и организациях осуществляют их руководители. </p>
            <p>Руководители федеральных органов исполнительной власти, органов исполнительной власти субъектов РФ, органов местного самоуправления и организаций несут персональную ответственность за организацию и проведение мероприятий по гражданской обороне и защите населения.</p>
            <img className='thema1_1_1__imgShema' src={img5} alt="руководство ГО"/>
            <p>Органами, осуществляющие управление ГО, являются (ст. 12 Федерального закона РФ от 12 февраля 1998 года №28-ФЗ «О гражданской обороне в Российской Федерации»):</p>
            <ol>
                <li>на федеральном уровне – орган исполнительной власти, уполномоченный на решение задач в области ГО – Министерство по делам гражданской обороны, чрезвычайным ситуациям и ликвидации последствий стихийных бедствий (МЧС России)</li>
                <li>на региональном уровне – Главное управление МЧС России по субъекту РФ. Главное управление МЧС России по Архангельской области ведёт свою историю от своего предшественника - Штаба Гражданской обороны Архангельской области, который в соответствии с Указом Президента  РФ от 18 декабря 1991 г. №305 был передан в  подчинение Государственного комитета РФ по делам ГОЧС. В соответствии с Приказом МЧС России от 26.10.2004 г. Главное управление по делам ГО и ЧС Архангельской области переформировано в Главное управление МЧС России по Архангельской области.</li>
                <li>на муниципальном уровне - органы, уполномоченные решать задачи ГО  и задачи по предупреждению и ликвидации ЧС в муниципальных образованиях РФ-. В Северодвинске это Отдел гражданской защиты администрации Северодвинска.</li>
                <li>на объектовом уровне (в организациях) -это  структурные подразделения (работники) организаций, уполномоченные на решение задач в области гражданской обороны, создаваемые в порядке, установленном Правительством РФ.</li>
            </ol>
            <img className='thema1_1_1__imgShema' src={img6} alt="управление ГО"/>

            <p>Структурные подразделения (работники) по ГО создаются (назначаются)  в организациях независимо от их организационно-правовой формы с целью управления ГО в этих организациях.</p>
            <p>Деятельность работников, уполномоченного на решение задач в области ГО в своей организации, регламентируется:</p>
            <ul>
                <li>Постановлением Правительства от 10.07.1999 г. № 782 (в ред. от 14.10.2016 г) «О создании (назначении) в организациях структурных подразделений (работников), уполномоченных на решение задач в области гражданской обороны»,</li>
                <li>Приказом МЧС РФ от 23.05.2017 № 230 «об утверждении Положения об уполномоченных на решение задач в области гражданской обороны структурных подразделениях (работниках) организаций»,</li>
                <li>Приказом Минтруда РФ от 27.10.2020 № 748н от 27.10.2020 «Об утверждении профессионального стандарта «Специалист по гражданской обороне».</li>
            </ul>
            <p>На основе этих документов разрабатывается должностная инструкция, которая определяет должностные обязанности, права и ответственность работника, уполномоченного на решение задач в области ГО в организации.</p>
            <p>На должность уполномоченного работника по ГО назначаются лица, имеющие соответствующую подготовку в области ГО.</p>
            <p>Обязанности уполномоченного работника по ГО могут выполняться на штатной или нештатной основе.</p>
            <p>В организациях, не отнесенных к категориям по ГО, работа по ГО может выполняться по совместительству одним из работников организации. Обязанности по ведению ГО может выполнять один из заместителей руководителя организации или иной работник по распоряжению руководителя организации, что закрепляется приказом или распоряжением по организации. Соответствующие записи вносятся в должностную инструкцию работника.</p>
            <p>Организации (учреждения), отнесенные к категории по ГО, создают структурные подразделения (отделы, сектора) или назначают отдельного работника (работников) организации на освобожденной основе. Для таких организаций существуют нормы определения количества работников по гражданской обороне в структурном подразделении организации с учетом численности ее представительств и филиалов:</p>
            <img className='thema1_1_1__imgShema' src={img7} alt="нормы работников"/>
            <p>В зависимости от категории организации по ГО должностные обязанности уполномоченного работника по ГО могут дополняться и детализироваться</p>
            <p>Уполномоченный работник по ГО назначается на должность и освобождается от должности приказом руководителя организации в соответствии с действующим законодательством РФ. Уполномоченный работник по ГО непосредственно подчиняется руководителю организации.</p>
            <p>В соответствии с основными задачами и предъявляемыми законодательством РФ требованиями в области ГО уполномоченный работник по ГО (ст. 4 Приказа МЧС РФ от 23.05.2017 № 230 «Об утверждении Положения об уполномоченных на решение задач в области гражданской обороны структурных подразделениях (работниках) организаций»):</p>
            <ol>
                <li> В ОРГАНИЗАЦИЯХ, ОТНЕСЕННЫХ К КАТЕГОРИЯМ ПО ГО:
                    <ul>
                        <li>организует разработку (разрабатывает), уточняет и корректирует планы ГО;</li>
                        <li>осуществляет методическое руководство планированием мероприятий ГО в представительствах и филиалах (если они имеются);</li>
                        <li>организует планирование, подготовку и проведение мероприятий по рассредоточению работников, продолжающих деятельность в военное время, и работников, обеспечивающих выполнение мероприятий по ГО в зонах возможных опасностей, а также заблаговременную подготовку безопасных районов и производственной базы в безопасных районах;</li>
                        <li>разрабатывает проекты документов, регламентирующих работу в области ГО;</li>
                        <li>формирует (разрабатывает) предложения по мероприятиям ГО, обеспечивающие выполнение мобилизационного плана организаций;</li>
                        <li>ведет учет защитных сооружений и других объектов ГО, принимает меры по поддержанию их в состоянии постоянной готовности к использованию, осуществляют контроль за их состоянием;</li>
                        <li>организует планирование и проведение мероприятий по ГО, направленных на поддержание устойчивого функционирования организаций в военное время;</li>
                        <li>организует разработку и реализацию инженерно-технических мероприятий ГО;</li>
                        <li>организует планирование и проведение мероприятий по световой и другим видам маскировки;</li>
                        <li>организует создание и поддержание в состоянии постоянной готовности к использованию систем связи и оповещения на пунктах управления этих организаций;</li>
                        <li>организует прием сигналов ГО и доведение их до руководителей организаций;</li>
                        <li>организует оповещение работников организаций об опасностях, возникающих при военных конфликтах или вследствие конфликтов, а также при возникновении ЧС природного и техногенного характера;</li>
                        <li>организует создание и поддержание в состоянии постоянной готовности локальных систем оповещения в организациях, эксплуатирующих опасные производственные объекты I и II классов опасности, на особо радиационно опасных и ядерно опасных производствах и объектах, гидротехнических сооружениях чрезвычайно высокой опасности и гидротехнических сооружениях высокой опасности;</li>
                        <li>планирует и организует подготовку по ГО руководителей организаций;</li>
                        <li>организует, планирует и осуществляет контроль за созданием, оснащением, подготовкой нештатных аварийно-спасательных формирований, нештатных формирований по обеспечению выполнения мероприятий по ГО, спасательных служб организаций и осуществляют их учет;</li>
                        <li>участвует в планировании проведения аварийно-спасательных работ;</li>
                        <li>организует подготовку работников способам защиты от опасностей, возникающих при военных конфликтах или вследствие этих конфликтов, а также при возникновении ЧС природного и техногенного характера;</li>
                        <li>планирует и организует проведение учений и тренировок по ГО, а также участвует в организации проведения учений и тренировок по мобилизационной подготовке;</li>
                        <li>формирует (разрабатывает) предложения по созданию, накоплению, хранению и освежению в целях ГО запасов материально-технических, продовольственных, медицинских и иных средств;</li>
                        <li>организует создание страхового фонда документации по ГО;</li>
                        <li>организует контроль за выполнением принятых решений и утвержденных планов по выполнению мероприятий ГО;</li>
                        <li>вносит на рассмотрение руководителю организации предложения по совершенствованию планирования и ведения ГО;</li>
                        <li>привлекает к работе по подготовке планов, распорядительных документов и отчетных материалов по ГО другие структурные подразделения организации.</li>
                    </ul>
                </li>
                <li>В ОРГАНИЗАЦИЯХ, НЕ ОТНЕСЕННЫХ К КАТЕГОРИЯМ ПО ГО:
                    <ul>
                        <li>организует взаимодействие с органами местного самоуправления по вопросу получения сведений о прогнозируемых опасностях, которые могут возникнуть при военных конфликтах или вследствие этих конфликтов, а также при ЧС природного и техногенного характера;</li>
                        <li>участвует в планировании мероприятий по ГО муниципального образования в части касающейся;</li>
                        <li>организует подготовку работников способам защиты и мероприятия по защите работников от опасностей, возникающих при военных конфликтах или вследствие этих конфликтов, а также при ЧС природного и техногенного характера.</li>
                    </ul>
                </li>
            </ol>
            <img className='thema1_1_1__imgShema' src={img8} alt="отнесение территорий к группам"/>

            <p>Территория, отнесенная к группе по гражданской обороне - территория, на которой расположен город или иной населенный пункт, имеющий важное оборонное и экономическое значение, с находящимися в нем объектами, представляющий высокую степень опасности возникновения ЧС  в военное и мирное время. (ФЗ№ 28 Статья 1)</p>
            <p>Цель отнесения территорий к группам по ГО - заблаговременная разработка и реализация мероприятий по ГО в объеме, необходимом и достаточном для предотвращения ЧС и защиты населения от поражающих факторов и последствий ЧС в военное и мирное время.</p>
            <p className='endThema'>Отнесение территорий городов или иных населенных пунктов к группам по ГО осуществляется в зависимости от их оборонного и экономического значения, численности населения, а также нахождения на территориях организаций, отнесенных к категориям по ГО особой важности, первой и второй или представляющих опасность для населения и территорий в связи с возможностью химического заражения, радиоактивного загрязнения или катастрофического затопления.</p>
        </>
                
    )
}

export default Thema132;