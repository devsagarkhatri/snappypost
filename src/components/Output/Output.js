import React from 'react';
import {OUTPUT_DEFAULT_BG,OUTPUT_MIN_HEIGHT,OUTPUT_MAX_HEIGHT,OUTPUT_MIN_WIDTH,OUTPUT_MAX_WIDTH,OUTPUT_BORDER_RADIUS} from './../../constants';
import * as Themes from './../SidebarComponents/ThemeSetting/ThemeExports.js';

function renderSelectedTheme(props,isTranslucent){
    let SelectedTheme = Themes[props.theme];
    return <SelectedTheme
                image={props.image} 
                formData={props.formData}
                isTranslucent={isTranslucent}
                minimalOutputRef = {props.minimalOutputRef}
            />;
}

const Output=(props)=>{
    
    let [isRoundCorner,isTranslucent] = [props.isRoundCorner,props.isTranslucent];
    return (
        <div className=''
            ref={props.ouputRef}
            id="outputRef"
            style={{
                backgroundImage:props.bgColor===""?OUTPUT_DEFAULT_BG:props.bgColor,
                minWidth:OUTPUT_MIN_WIDTH,maxWidth:OUTPUT_MAX_WIDTH,
                minHeight:OUTPUT_MIN_HEIGHT,maxHeight:OUTPUT_MAX_HEIGHT,
                borderRadius:isRoundCorner?OUTPUT_BORDER_RADIUS:"0px",
                display:"flex",alignItems:"center",
                justifyContent:"center",backgroundSize:"100% 100%",
                
            }}>
            {renderSelectedTheme(props,isTranslucent)}
        </div>
     );
}

export default Output;