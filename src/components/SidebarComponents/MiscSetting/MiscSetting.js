import React, { useState } from 'react';
import './MiscSetting.css';

function MiscSetting(props) {
    let [isRoundCorner,setRoundCorner] = useState(false);
    let [isTranslucent,setTranslucent] = useState(false);
    let [isFocused,setFocused] = useState(false);
    
    const handleRoundCorner=(event)=>{
        console.log(event.target.value);
        props.handleRoundCorner(!isRoundCorner);
        setRoundCorner(!isRoundCorner);
    }
    const handleTranslucent=(event)=>{
        console.log(event.target.value);
        props.handleTranslucent(!isTranslucent);
        setTranslucent(!isTranslucent);
    }
    const handleFocused=(event)=>{
        console.log(event.target.value);
        props.handleFocused(!isFocused);
        setFocused(!isFocused);
    }
    
    return ( 
        <form className='form'>
            
            <table className="table table-borderless ml-5">
                <tbody className='text-white'>
                <tr>
                        <td colSpan={2}>Round Corners</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" onChange={(event)=>handleRoundCorner(event)}/>
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Translucent Background</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" onChange={(event)=>handleTranslucent(event)}/>
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Generate Content Only</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" onChange={(event)=>handleFocused(event)}/>
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>

                </tbody>
            </table>
        </form>
     );
}

export default MiscSetting;
