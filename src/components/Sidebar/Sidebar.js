import React, { useState } from 'react';
import './Sidebar.css';

import BgColor from '../SidebarComponents/BgColor/BgColor';
import BgGradient from '../SidebarComponents/BgGradient/BgGradient';
import BgImage from '../SidebarComponents/BgImage/BgImage';
import MiscSetting from '../SidebarComponents/MiscSetting/MiscSetting';
import ThemeSetting from '../SidebarComponents/ThemeSetting/ThemeSetting';
import {SIDEBAR_MENU_HEIGHT} from './../../constants';

import logo1 from '../../assets/images/snappypost_logo2.png';
import solid from '../../assets/icons/solid.svg';
import gradient from '../../assets/icons/gradient.svg';
import images from '../../assets/icons/images.svg';
import theme from '../../assets/icons/theme.svg';
import settings from '../../assets/icons/settings.svg';



const Sidebar = (props) => {
    
    let [isOpen,setOpen]=useState(-1);
    let [setColor,
        setTranslucent,
        setRoundCorner,
        setTheme,
        setFocused,
        ]=[props.setColor,props.setTranslucent,props.setRoundCorner,props.setTheme,props.setFocused];

    function bgColor(color){
        setColor(color);
    }
    const handleColorClickToggle=(val)=>{
        Number(isOpen)!==Number(val)?setOpen(val):setOpen(-1);
    }

    const handleTranslucent=(val)=>{
        setTranslucent(val);
    }
    const handleRoundCorner=(val)=>{
        setRoundCorner(val);
    }
    const handleFocused=(val)=>{
        setFocused(val);
    }

    return ( 
        <>
            <div className="row p-0">    
                <img src={logo1} alt="" style={{height:"80px"}} />
            </div>
            <div className='d-flex flex-column justify-content-between' style={{minHeight:SIDEBAR_MENU_HEIGHT}}>
                <div className='text-dark'>
                    <div className='row px-3 pt-3' style={{maxHeight:"94vh",color:"white"}}>
                        <div className='pt-1 bg-transparent sidebar_menuitem' onClick={()=>handleColorClickToggle(1)}>
                            <h5 className='text-light'><img src={solid} className="icon" alt="" height="auto" width="auto" /> Solid Colors</h5>
                        </div>
                        <div className={Number(isOpen)===Number(1)?"semi-border":"collapse"}>
                            <BgColor bgColor={bgColor}/>
                        </div>                    
                    </div>
                    <div className='row px-3' style={{maxHeight:"94vh",color:"white"}}>
                        <div className='pt-1 bg-transparent sidebar_menuitem'  onClick={()=>handleColorClickToggle(2)}>
                            <h5 className='text-light'><img src={gradient} className="icon" alt="" height="auto" width="auto" /> Gradient Colors</h5>
                        </div>
                        <div className={Number(isOpen)===Number(2)?"semi-border":"collapse"}>
                            <BgGradient bgColor={bgColor}/>
                        </div>            
                    </div>                
                    <div className='row px-3' style={{maxHeight:"94vh",color:"white"}}>
                        <div className='pt-1 bg-transparent sidebar_menuitem'  onClick={()=>handleColorClickToggle(3)}>
                            <h5 className='text-light'><img src={images} className="icon" alt="" height="auto" width="auto" /> Image Backgrounds</h5>
                        </div>
                        <div className={Number(isOpen)===Number(3)?"semi-border":"collapse"}>
                            <BgImage bgColor={bgColor}/>
                        </div>            
                    </div>
                    <div className='row px-3' style={{maxHeight:"94vh",color:"white"}}>
                        <div className='pt-1 bg-transparent sidebar_menuitem'  onClick={()=>handleColorClickToggle(4)}>
                            <h5 className='text-light'><img src={theme} className="icon" alt="" height="auto" width="auto" /> Themes</h5>
                        </div>
                        <div className={Number(isOpen)===Number(4)?"semi-border":"collapse"}>
                            <ThemeSetting setTheme={setTheme}/>
                        </div>            
                    </div> 
                    <div className='row px-3' style={{maxHeight:"94vh",color:"white"}}>
                        <div className='pt-1 bg-transparent sidebar_menuitem'  onClick={()=>handleColorClickToggle(5)}>
                            <h5 className='text-light'><img src={settings} className="icon" alt="" height="auto" width="auto" /> Miscellaneous Settings</h5>
                        </div>
                        <div className={Number(isOpen)===Number(5)?"semi-border":"collapse"}>
                            <MiscSetting
                                handleTranslucent={handleTranslucent}
                                handleRoundCorner={handleRoundCorner}
                                handleFocused={handleFocused}
                            />                 
                        </div>            
                    </div>
                </div>
                <div className='row px-5 py-0 semi-border-top' style={{maxHeight:"94vh",color:"white"}}>
                <p className='pt-2 text-center'>Developed by : <a className='text-light' href="https://www.linkedin.com/in/sagarkhatri" target={'_blank'} >Sagar Khatri</a></p> 
                </div>
            </div>
        </>
     );
}
 
export default Sidebar;