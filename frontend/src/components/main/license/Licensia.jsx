import licensiaTitul from '../../../image/main/licensia_titul.jpg';
import licensiaBack from '../../../image/main/licensia_back.jpg';
import licensiaEmblem from '../../../image/main/licensia_emblem.png'

export const Licensia = () => {
    return (
        <section className='licensia' aria-label='лицензия'>
            <h2 className='licensia__heading'>
                Наша Лицензия
            </h2>
            {/* <img src={licensiaEmblem} className='licensia__emblem' alt='эмблема'/> */}
            <div className='licensia__content'>
                <img src={licensiaTitul} className='licensia__img' alt='лицензия'/>
                <img src={licensiaBack} className='licensia__img' alt='лицензия'/> 
            </div>
        </section>
    )
}
