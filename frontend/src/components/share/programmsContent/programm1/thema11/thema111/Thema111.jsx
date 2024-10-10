import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
// import mammoth from 'mammoth';
// import img1 from '../../../../../../image/programm/programm1/img_thema1_1_1.jpg';
// import img2 from '../../../../../../image/programm/programm1/img_theme1_1_2.jpg';
// import img3 from '../../../../../../image/programm/programm1/img_theme1_1_3.jpg';
// import img4 from '../../../../../../image/programm/programm1/img_theme1_1_4.png';
// import img5 from '../../../../../../image/programm/programm1/img_thema1_1_5.png';
import xxx from '../thema111/xxx.pdf'
// import yyy from '../../../../../../image/yyy.doc';
// import yyy1 from '../../../../../../image/yyy1.docx'

// import zzz from '../../../../../../image/zzz.html'

import useObserver from '../../../../customHook/useObserver';
import { useDispatch } from 'react-redux';
import { setIsEndThema, setIsStartThema } from '../../../../../store/slice/userSlice';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

const Thema111 = () => {

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

    const [numPages, setNumPages] = useState(undefined);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };
    console.log(startThema)
    console.log(endThema)
    return (
      <>
        <div className='thema111 startThema' >
          <Document file={xxx} onLoadSuccess={onDocumentLoadSuccess}>
            {numPages && Array.from(Array(numPages).keys()).map((item, index)=><Page pageNumber={item+1} key={index}/>)}
          </Document>
        </div>
        <div className='endThema'></div>
      </>

    )
}

export default Thema111;