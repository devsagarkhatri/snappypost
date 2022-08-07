import React, { useRef, useState} from 'react';
import html2canvas from 'html2canvas';
import Form from '../Form/Form';
import Output from '../Output/Output';
import Sidebar from '../Sidebar/Sidebar';

const BasePage=()=> {
    let outputRef = useRef(null);
    let minimalOutputRef = useRef(null);
    let containerRef = useRef(null);
    let [image,setImage] = useState();
    let [formData,setFormData] = useState([]);
    let [color,setColor]=useState('');
    let [theme,setTheme] = useState('TwitterTheme1');
    let [isTranslucent,setTranslucent]=useState(false);
    let [isRoundCorner,setRoundCorner]=useState(false);
    let [isFocused,setFocused] = useState(false);
    
    function getFormData(data){
        let dataObj = JSON.parse(data);
        setFormData(dataObj);
    }    
    
    function saveAs(uri, filename) {
        var link = document.createElement('a');    
        if (typeof link.download === 'string') {
    
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);    
        } else {
            window.open(uri);
        }
    }
    const downloadPost=async()=>{
        let refpoint = isFocused?'#minimalOutputRef':'#outputRef';
        html2canvas(document.querySelector(refpoint)).then(function(canvas) {

            saveAs(canvas.toDataURL(), formData.name+'\'s Tweet');
        });
    }

    return ( 
        <div className='container' ref={containerRef}>    
            <div className='row'>
                <div className="col-lg-1"></div>
                <div className="col-lg-3 bg-primary p-0" style={{minHeight:"100vh",maxHeight:"100vh"}}>
                    <Sidebar 
                        setColor={setColor}
                        setTranslucent={setTranslucent}
                        setRoundCorner={setRoundCorner}
                        setTheme={setTheme}
                        setFocused={setFocused}
                    />    
                </div>
                <div className="col-lg-7 col-md-12 bg-light">
                    <div className='bg-transparent' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <Output
                            formData={formData} 
                            bgColor={color}
                            isRoundCorner={isRoundCorner}
                            isTranslucent={isTranslucent}
                            outputRef={outputRef}
                            minimalOutputRef={minimalOutputRef}
                            theme={theme}
                            image={image}
                        />
                    </div>
                    <div className='bg-transparent ' >
                    <Form 
                        getFormData={getFormData}
                        setImage = {setImage}
                        outputRef={outputRef}
                    />
                    </div>
                    <button className="btn btn-small bg-primary text-white" onClick={(event)=>downloadPost()}>Generate Image</button>
                </div>
            </div>
        </div> 
    );
}

export default BasePage;