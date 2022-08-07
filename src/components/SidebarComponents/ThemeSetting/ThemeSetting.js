import React, { useEffect, useState } from 'react';
import {SIDEBAR_COMPONENT_HEIGHT} from './../../../constants';
import colorPalette1 from './ThemeSettingData';

import './ThemeSetting.css';


const ThemeSetting=(props)=>{
    let [paletteArray,setPalette] = useState([]);
    useEffect(()=>{
        const palette = [];
        const width = 4;
        // console.log(colorPalette1.length);
        const height = Math.ceil(colorPalette1.length / width);
        for (let row = 0; row < height; row++) {
        const currentRow = colorPalette1.slice(row * width, (row + 1) * width);
        palette.push(currentRow);
        }
        // console.log(palette);
        setPalette(palette);
    
    },[]);
    const handleTheme=(event,data)=>{
        console.log(data+" is clicked");
        props.setTheme(data);
    }
    const setBackground=(index)=>{
        return index%2==0?"linear-gradient(180deg,#fea 0%,#dc8 49%,#a95 51%,#dc8 100%)":"linear-gradient(180deg,#FFE6E9 0%,#DDA6AE 49%, #B76E79 51%,#DDA6AE 100%)";
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
                                    <div className="colorbutton align-middle text-uppercase " style={{background:setBackground(palette.indexOf(data))}} onClick={(event)=>handleTheme(event,data)}>{'Theme' + (palette.indexOf(data)+1)}</div>                    
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

export default ThemeSetting;