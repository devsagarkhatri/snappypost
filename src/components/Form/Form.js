import React, { useEffect, useState } from 'react';

function Form(props) {
    
    let[contentLength,setContentLength]=useState(0);
    let[name,setName] = useState('Name');
    let[username,setUsername] = useState('Username');
    let[time,setTime] = useState('12:00 PM');
    let[day,setDay] = useState('1');
    let[month,setMonth] = useState('Jun');
    let[year,setYear] = useState('2022');
    let[content,setContent] = useState('Your content here.');
    let[retweets,setRetweets] = useState(Math.floor(Math.random()*3000)+345);
    let[quotetweets,setQuoteTweets] = useState(Math.floor(Math.random()*1000)+345);
    let[likes,setLikes] = useState(Math.floor(Math.random()*10000)+3045);
    let[client,setClient] = useState('');
    
    useEffect(()=>{
        let formData={
            name:name,
            username:username,
            time:time,
            day:day,
            month:month,
            year:year,
            content:content,
            retweets:retweets,
            quotetweets:quotetweets,
            likes:likes,
            client:client,
        };
        
        props.getFormData(JSON.stringify(formData));
    },[]);

    function handleRandomizeCount(){    
        let retweetsId= Math.floor(Math.random()*3000)+545;
        let quotetweetsId =  Math.floor(Math.random()*1000)+345;
        let likesId = Math.floor(Math.random()*10000)+3745;
        
        document.getElementById("retweetsId").value = retweetsId;
        document.getElementById("quotetweetsId").value = quotetweetsId
        document.getElementById("likesId").value = likesId;
        
        setRetweets(retweetsId);
        setQuoteTweets(quotetweetsId);
        setLikes(likesId);
    }

    function handleCurrentDateTime(){
        let currentDate  =new Date();
        let h = currentDate.getHours();
        let m = currentDate.getMinutes();
        let time = (h%12+12*(h%12===0))+":"+m+ (h >= 12 ? ' PM' : ' AM');
        let oh = h<10?'0'+h:h;
        let om = m<10?'0'+m:m;
        let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        
        let timeId= document.getElementById('time');
        let dayId = document.getElementById('dayInput');
        let monthId = document.getElementById('monthInput');
        let yearId = document.getElementById('yearInput');
        
        timeId.value  = oh+':'+om;
        dayId.value   = currentDate.getDay();
        monthId.value = months[currentDate.getMonth()];
        yearId.value  = currentDate.getFullYear();
        setTime(time);
        setDay(currentDate.getDay());
        setMonth(months[currentDate.getMonth()]);
        setYear(currentDate.getFullYear());
        console.log(time+' AM, '+ currentDate.getDay()+'/ '+ currentDate.getMonth()+'/ '+currentDate.getFullYear());
    }
    function handleContentChange(event){
        if(event.target.value===''){
            setContent('Your content here.');
        }else{
            setContent(event.target.value);
        }        
        setContentLength(event.target.value.length);
    }
    function handleName(event){
        if(event.target.value===''){
            setName('Name');
        }else{
            setName(event.target.value);
        }
        
        console.log(event.target.value);
    }
    function handleUsername(event){
        if(event.target.value===''){
            setUsername('Username');
        }else{
            setUsername("@"+event.target.value);
        }        
        console.log(event.target.value);
    }
    function handleTime(event){
        let t= event.target.value;
        var [h,m] = t.split(":");

        let time = (h%12+12*(h%12===0))+":"+m+ (h >= 12 ? ' PM' : ' AM');
        setTime(time);
        console.log(time);
    }
    function handleProfilePic(event){
        if(event.target.files[0]){
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = ()=>{
                console.log(reader.result);
                (reader.result)?localStorage.setItem('image', reader.result):localStorage.removeItem('image');
                props.setImage(localStorage.getItem('image'));
            };
            console.log(event.target.files[0]+'\n');
        }        
    }
    function handleResetProfilePic(){
        let profile = document.getElementById("profilePic");
        localStorage.removeItem('image');
    }
    function handleDay(event){
        setDay(event.target.value);
        console.log(event.target.value);
    }
    function handleMonth(event){
        setMonth(event.target.value);
        console.log(event.target.value);
    }
    function handleYear(event){
        setYear(event.target.value);
        console.log(event.target.value);
    }
    function handleRetweets(event){
        setRetweets(event.target.value);
        console.log(event.target.value);
    }
    function handleQuotetweets(event){
        setQuoteTweets(event.target.value);
        console.log(event.target.value);
    }
    function handleLikes(event){
        setLikes(event.target.value);
        console.log(event.target.value);
    }
    function handleClient(event){
        setClient(event.target.value);
        console.log(event.target.value);
    }
    function handleForm(event){
        let formData={
            name:name,
            username:username,
            time:time,
            day:day,
            month:month,
            year:year,
            content:content,
            retweets:retweets,
            quotetweets:quotetweets,
            likes:likes,
            client:client,
        };
        
        if(event.target.id==="time"){
            var [h,m] = event.target.value.split(":");
            let time = (h%12+12*(h%12===0))+":"+m+ (h >= 12 ? ' PM' : ' AM');
            formData[event.target.id] = time;            
        }else if(event.target.id==="username" && event.target.value!==""){
            formData[event.target.id] = "@"+event.target.value;
        }else{
            formData[event.target.id] = event.target.value;
        }
        
        props.getFormData(JSON.stringify(formData));
    }
    


    return ( 
        <form className='formclass form' onChange={(event)=>handleForm(event)}>
            
            <div className="form-group row">
                <div className="col-lg-6 col-md-6">
                    <label htmlFor="name">Enter your Name :</label>
                    <input type="text" className='form-control form-control-sm' id="name" onChange={(event)=>handleName(event)} placeholder="Enter Your Name"></input>                
                </div>
                <div className="col-lg-6 col-md-6">
                    <label htmlFor="username">Enter your Username :</label>
                    <input type="text" className='form-control form-control-sm' id="username" onChange={(event)=>handleUsername(event)} placeholder="Enter Your Username"></input>
                </div>
                
            </div>
            <div className="form-group row">
                <div className="col-lg-6 col-md-6">
                    <label htmlFor="time">Set Time :</label>
                    <input type="time" className='form-control form-control-sm' id="time" onChange={(event)=>handleTime(event)} defaultValue={"12:00"}></input>
                </div>
                <div className="col-lg-6 col-md-6">
                    <label htmlFor="profilePic">Upload Profile Picture</label><br/>
                    <div className="row">
                        <div className="col-lg-6 col md-6">
                            <input type="file" className="form-control form-control-sm" id="profilePic" accept="image/*" onChange={(event)=>handleProfilePic(event)}/>     
                        </div>
                        <div className="col-lg-6 col md-6">
                            <div className='btn btn-sm btn-primary' onClick={()=>handleResetProfilePic()}>Reset Image</div>   
                        </div>
                    </div>        
                    
                    
                </div>                
            </div>
            <div className="form-group row">
                <div className="col-lg-6 col-md-6">
                    <div className="row">
                        <div className="col form-item">
                            <label htmlFor="dayInput">Day</label>
                            <input type="number" className="form-control form-control-sm" id="dayInput" onChange={(event)=>handleDay(event)} max={31} step={1} defaultValue={1}/>
                        </div>
                        <div className="col form-item">
                            <label htmlFor="monthInput">Month</label>
                            <select name="" id="monthInput" defaultValue={"Jun"} onChange={(event)=>handleMonth(event)} className="form-select form-select-sm">
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="Apr">Apr</option>
                                <option value="May">May</option>
                                <option value="Jun">Jun</option>
                                <option value="Jul">Jul</option>
                                <option value="Aug">Aug</option>
                                <option value="Sep">Sep</option>
                                <option value="Oct">Oct</option>
                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>
                            </select>
                        </div>
                        <div className="col form-item">
                            <label htmlFor="yearInput">Year</label>
                            <input type="number" className="form-control form-control-sm" onChange={(event)=>handleYear(event)} id="yearInput" min={1} max={9999} step={1} defaultValue={2022}/>
                        </div>
                        <div className="container">
                            <div className='btn btn-sm btn-link' onClick={()=>handleCurrentDateTime()}>Use Current Time and Date</div>
                        </div>                        
                    </div>                    
                </div>
                <div className="col-lg-6 col-md-6">
                    <label htmlFor="content">Enter your text :</label>
                    <input type="text" className='form-control form-control-sm' id="content" onChange={(event)=>handleContentChange(event)} maxLength={280} placeholder="Enter your text here !"></input>
                    <small><small>{contentLength}/280 characters</small></small>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-lg-6 col-md-6">
                        <div className="row">
                            <div className="col form-item">
                                <label htmlFor="retweetsId">Retweets</label>
                                <input type="number" className="form-control form-control-sm" id="retweetsId" onChange={(event)=>handleRetweets(event)} step={1} defaultValue={retweets}/>
                            </div>
                            <div className="col form-item">
                                <label htmlFor="quotetweetsId">Quote Tweets</label>
                                <input type="number" className="form-control form-control-sm" id="quotetweetsId" onChange={(event)=>handleQuotetweets(event)}  step={1} defaultValue={quotetweets}/>
                            </div>
                            <div className="col form-item">
                                <label htmlFor="likesId">Likes</label>
                                <input type="number" className="form-control form-control-sm" id="likesId"  onChange={(event)=>handleLikes(event)} min={1}  step={1} defaultValue={likes}/>
                            </div>
                            <div className="container">
                                <div className='btn btn-sm btn-link' onClick={()=>handleRandomizeCount()}>Randomize All</div>
                            </div>                        
                        </div>                    
                </div>

                <div className="col-lg-6 col-md-6">
                    <label htmlFor="time">Set Client</label>
                    <select name="" id="client" className="form-select form-select-sm" defaultValue={"Twitter for iPhone"} onChange={(event)=>handleClient(event)}>
                        <option value="">None</option>
                        <option value="Twitter for iPhone">Twitter for iPhone</option>
                        <option value="Twitter Web App">Twitter Web App</option>
                        <option value="Twitter for Android">Twitter for Android</option>
                    </select>
                </div>                
            </div>

            
        </form>

     );
}

export default Form;