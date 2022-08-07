import React, { useEffect, useState } from 'react';
import {SIDEBAR_COMPONENT_HEIGHT} from './../../../constants';
import imagePalette from './BgImageData';
import './BgImage.css';

function BgImage(props) {
    let [paletteArray,setPalette] = useState([]);
    let [tbody,setTBody] = useState();
    useEffect(()=>{
        const palette = [];
        const width = 4;
        // console.log(imagePalette.length);
        const height = Math.ceil(imagePalette.length / width);
        for (let row = 0; row < height; row++) {
        const currentRow = imagePalette.slice(row * width, (row + 1) * width);
        palette.push(currentRow);
        }
        // console.log(palette);
        setPalette(palette);
        const tempbody = palette.map((palette,index) => {
            return (
            <tr key={index}>
                {palette.map((data,index1) => {
                return (
                    <td key={index1} className="text-center">
                        <div className="colorsquare" style={{background:data,backgroundSize:"cover",backgroundPosition:"center center"}} onClick={(event)=>handleColor(event,data)}></div>                    
                    </td>
                );
                })}
            </tr>
            );
        });

        setTBody(tempbody);
    },[]);

    const handleColor=(event,data)=>{
        console.log(data+" is clicked");
        props.bgColor(data);
    }
    return ( 
        <div className={props.hidden?'.hide':''} style={{overflowX:"auto",maxHeight:SIDEBAR_COMPONENT_HEIGHT}}>
            <small className='text-center'><small><i>Loading images can take some time, please wait.</i></small></small>
            <table className="table table-borderless ml-5">
                <tbody>
                    {tbody}
                </tbody>
            </table>
        </div>            
     );
}

export default BgImage;