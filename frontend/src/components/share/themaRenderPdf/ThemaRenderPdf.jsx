import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import useObserver from '../../share/customHook/useObserver';

// import useObserver from '../../../../customHook/useObserver';
import { useDispatch } from 'react-redux';
import { setIsEndThema, setIsStartThema } from '../../store/slice/userSlice';

// import { setIsEndThema, setIsStartThema } from '../../../../../store/slice/userSlice';
// import thema1 from '../programmsContent/programm1/block1/thema1.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

const ThemaRenderPdf = ({pdf}) => {

    const dispatch = useDispatch();
    const [isNewThema, setIsNewThema] = useState(true);

    useEffect(()=>{
        setIsNewThema(true);
    },[pdf])
    // let showStart = useObserver('startThema').setShow;
    // let showEnd = useObserver('endThema').setShow;

    // useEffect(()=>{

    //     showStart(false);
    //     showEnd(false);
    // },[]);

    let startThema = useObserver('startThema', isNewThema).show;
    let watchStart = useObserver('startThema', isNewThema).setWatch
    let endThema = useObserver('endThema', isNewThema).show;
    let watchEnd = useObserver('endThema', isNewThema).setWatch
    useEffect(()=>{
        setIsNewThema(false);
        watchStart();
        watchEnd();
        dispatch(setIsStartThema(startThema));
        dispatch(setIsEndThema(endThema));
    },[startThema, endThema]);

    const [numPages, setNumPages] = useState(undefined);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };
    
    console.log(startThema);
    console.log(endThema);
    return (
      <>
        <div className='themaRender startThema' >
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {numPages && Array.from(Array(numPages).keys()).map((item, index)=><Page pageNumber={item+1} key={index}/>)}
          </Document>
        </div>
        <div className='endThema'></div>
      </>

    )
}

export default ThemaRenderPdf;