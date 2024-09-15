import { useEffect } from 'react';
import img9 from '../../../../../../image/programm/programm1/img_thema1_3_1.png';
import img10 from '../../../../../../image/programm/programm1/img_thema1_3_2.png';
import useObserver from '../../../../customHook/useObserver';
import { useDispatch } from 'react-redux';
import { setIsEndThema, setIsStartThema } from '../../../../../store/slice/userSlice';

const Thema133 = () => {

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
            <p className='startThema'>Глава III ФЗ от 12.02.1998 № 28-ФЗ «О гражданской обороне» определяет полномочия органов исполнительной власти субъектов РФ, органов местного самоуправления, организаций, права и обязанности граждан РФ в области ГО.</p>
            <h3>Полномочия Президента РФ (ст. 5 Федерального закона от 12.12.1998 № 28-ФЗ):</h3>
            <img className='thema1_1_1__imgShema' src={img9} alt="руководство ГО"/>
            <h3>Полномочия  Правительства РФ (ст. 6 Федерального закона от 12.12.1998 № 28-ФЗ):</h3>
            <ul>
                <li>обеспечивает проведение единой государственной политики в области гражданской обороны;</li>
                <li>руководит организацией и ведением гражданской обороны;</li>
                <li>издает нормативные правовые акты в области гражданской обороны и организует разработку проектов федеральных законов в области гражданской обороны;</li>
                <li>определяет порядок отнесения территорий к группам по гражданской обороне в зависимости от количества проживающего на них населения и наличия организаций, играющих существенную роль в экономике государства или влияющих на безопасность населения, а также организаций</li>
                <li>к категориям по гражданской обороне в зависимости от роли в экономике государства или влияния на безопасность населения;</li>
                <li>определяет порядок эвакуации населения, материальных и культурных ценностей в безопасные районы;</li>
                <li>определяет порядок подготовки населения в области гражданской обороны;</li>
                <li>определяет порядок создания убежищ и иных объектов гражданской обороны, а также порядок накопления, хранения и использования в целях гражданской обороны запасов материально-технических, продовольственных, медицинских и иных средств;</li>
                <li>определяет порядок приведения в готовность гражданской обороны;</li>
                <li>определяет порядок функционирования сети наблюдения и лабораторного контроля гражданской обороны и защиты населения;</li>
                <li>определяет порядок создания, реконструкции и поддержания в состоянии постоянной готовности к использованию систем оповещения населения;</li>
                <li>утверждает положение о федеральном государственном надзоре в области гражданской обороны, порядок государственного надзора за реализацией органами государственной власти и органами местного самоуправления полномочий в области гражданской обороны;</li>
                <li>осуществляет иные полномочия в области гражданской обороны в соответствии с законодательством Российской Федерации и указами Президента Российской Федерации.</li>
            </ul>
            {/* <img className='thema1_1_1__imgShema' src={img6} alt="управление ГО"/> */}
            <h3>Полномочия  федеральных органов исполнительной власти РФ (ст. 7 Федерального закона от 12.12.1998 № 28-ФЗ):</h3>
            <ul>
                <li>принимают нормативные акты в области гражданской обороны, доводят их требования до сведения организаций, находящихся в их ведении, и контролируют их выполнение;</li>
                <li>разрабатывают и реализуют планы гражданской обороны, согласованные с федеральным органом исполнительной власти, уполномоченным на решение задач в области гражданской обороны, организуют проведение мероприятий по гражданской обороне, включая создание и подготовку необходимых сил и средств;</li>
                <li>осуществляют меры, направленные на сохранение объектов, необходимых для устойчивого функционирования экономики и выживания населения в военное время;</li>
                <li>создают, реконструируют и поддерживают в состоянии постоянной готовности к использованию технические системы управления ГО и системы оповещения населения в районах размещения объектов, производств и сооружений, указанных в п.3 ст. 9 Федерального закона от 12.12.1998 № 28-ФЗ и находящихся в ведении федеральных органов исполнительной власти;</li>
                <li>создают и содержат в целях гражданской обороны запасы материально-технических, продовольственных, медицинских и иных средств;</li>
                <li>определяют перечень организаций, обеспечивающих выполнение мероприятий по гражданской обороне федерального органа исполнительной власти.</li>
            </ul>
            <h3>Полномочия  органов исполнительной власти субъектов РФ  и органов местного самоуправления (ст. 8 Федерального закона от 12.12.1998 № 28-ФЗ):</h3>
            <ul>
                <li>организуют проведение мероприятий по гражданской обороне, разрабатывают и реализуют планы гражданской обороны и защиты населения;</li>
                <li>в пределах своих полномочий создают и поддерживают в состоянии готовности силы и средства гражданской обороны;</li>
                <li>организуют подготовку населения в области гражданской обороны;</li>
                <li>создают и поддерживают в состоянии постоянной готовности к использованию технические системы управления гражданской обороны, системы оповещения населения об опасностях, возникающих при военных конфликтах или вследствие этих конфликтов, а также при чрезвычайных ситуациях природного и техногенного характера, защитные сооружения и другие объекты гражданской обороны;</li>
                <li>планируют мероприятия по подготовке к эвакуации населения, материальных и культурных ценностей в безопасные районы, их размещению, развертыванию лечебных и других учреждений, необходимых для первоочередного обеспечения пострадавшего населения;</li>
                <li>планируют мероприятия по поддержанию устойчивого функционирования организаций в военное время;</li>
                <li>создают и содержат в целях гражданской обороны запасы материально - технических, продовольственных, медицинских и иных средств;</li>
                <li>обеспечивают своевременное оповещение населения, в том числе экстренное оповещение населения, об опасностях, возникающих при военных конфликтах или вследствие этих конфликтов, а также при чрезвычайных ситуациях природного и техногенного характера;</li>
                <li>определяют перечень организаций, обеспечивающих выполнение мероприятий регионального уровня по гражданской обороне</li>
            </ul>
            <p>Органы местного самоуправления самостоятельно в пределах границ муниципальных образований (ОГЗ Северодвинска):</p>
            <ul>
                <li>проводят мероприятия по гражданской обороне, разрабатывают и реализовывают планы гражданской обороны и защиты населения;</li>
                <li>проводят подготовку населения в области гражданской обороны;</li>
                <li>создают и поддерживают в состоянии постоянной готовности к использованию муниципальные системы оповещения населения об опасностях, возникающих при военных конфликтах или вследствие этих конфликтов, а также при чрезвычайных ситуациях природного и техногенного характера, защитные сооружения и другие объекты гражданской обороны;</li>
                <li>проводят мероприятия по подготовке к эвакуации населения, материальных и культурных ценностей в безопасные районы;</li>
                <li>проводят первоочередные мероприятия по поддержанию устойчивого функционирования организаций в военное время;</li>
                <li>создают и содержат в целях гражданской обороны запасы продовольствия, медицинских средств индивидуальной защиты и иных средств;</li>
                <li>обеспечивают своевременное оповещение населения, в том числе экстренное оповещение населения, об опасностях, возникающих при военных конфликтах или вследствие этих конфликтов, а также при чрезвычайных ситуациях природного и техногенного характера;</li>
                <li>в пределах своих полномочий создают и поддерживают в состоянии готовности силы и средства гражданской обороны, необходимые для решения вопросов местного значения;</li>
                <li>определяют перечень организаций, обеспечивающих выполнение мероприятий местного уровня по гражданской обороне.</li>
             </ul>
            <h3>Полномочия  организаций (ст. 9 Федерального закона от 12.12.1998 № 28-ФЗ): </h3>
            <ul>
                <li>планируют и организуют проведение мероприятий по гражданской обороне;</li>
                <li>проводят мероприятия по поддержанию своего устойчивого функционирования в военное время;</li>
                <li>осуществляют подготовку своих работников в области гражданской обороны;</li>
                <li>создают и содержат в целях гражданской обороны запасы материально- технических, продовольственных, медицинских и иных средств.</li>
                <li>планируют мероприятия по подготовке к эвакуации населения, материальных и культурных ценностей в безопасные районы, их размещению, развертыванию лечебных и других учреждений, необходимых для первоочередного обеспечения пострадавшего населения;</li>
                <li>планируют мероприятия по поддержанию устойчивого функционирования организаций в военное время;</li>
                <li>создают и содержат в целях гражданской обороны запасы материально - технических, продовольственных, медицинских и иных средств;</li>
            </ul>

            <p>Организации, отнесенные в установленном порядке к категориям по гражданской обороне, создают и поддерживают в состоянии готовности нештатные формирования по обеспечению выполнения мероприятий по ГО.</p>
            <p>Организации, эксплуатирующие опасные производственные объекты I и II классов опасности, особо радиационно опасные и ядерно опасные производства и объекты, гидротехнические сооружения чрезвычайно высокой опасности и гидротехнические сооружения высокой опасности, а также организации, эксплуатирующие опасные производственные объекты III класса опасности, отнесенные в установленном порядке к категориям по ГО, создают и поддерживают в состоянии готовности локальные системы оповещения.</p>
            <p>Обязанности уполномоченного работника по ГО могут выполняться на штатной или нештатной основе.</p>
            <h3>Права и обязанности граждан РФ в области ГО (ст. 10 Федерального закона от 12.12.1998 № 28-ФЗ):</h3>
            <img className='thema1_1_1__imgShema endThema' src={img10} alt="руководство ГО"/>
        </>
                
    )
}

export default Thema133;