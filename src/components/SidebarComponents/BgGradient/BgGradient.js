import React, { useEffect, useState } from 'react';
import {SIDEBAR_COMPONENT_HEIGHT} from './../../../constants';
import gradientPalette from './bgGradientData';
import './BgGradient.css';

function BgGradient(props) {
    let [paletteArray,setPalette] = useState([]);

    useEffect(()=>{
        const palette = [];
        const width = 4;
        // console.log(gradientPalette.length);
        const height = Math.ceil(gradientPalette.length / width);
        for (let row = 0; row < height; row++) {
        const currentRow = gradientPalette.slice(row * width, (row + 1) * width);
        palette.push(currentRow);
        }
        // console.log(palette);
        setPalette(palette);
    
    },[]);
    const handleColor=(event,data)=>{
        console.log(data+" is clicked");
        props.bgColor(data);
    }
    return ( 
        <div className={props.hidden?'.hide':''} style={{overflowX:"auto",maxHeight:SIDEBAR_COMPONENT_HEIGHT}}>
            <table className="table table-borderless ml-5">
                <tbody>
                    {paletteArray.map((palette) => {
                        return (
                        <tr key={paletteArray.indexOf(palette)}>
                            {palette.map((data) => {
                            return (
                                <td key={palette.indexOf(data)} className="text-center">
                                    <div className="colorsquare" style={{background:data}} onClick={(event)=>handleColor(event,data)}></div>                    
                                </td>
                            );
                            })}
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>            
     );
}

export default BgGradient;