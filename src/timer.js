import React from 'react';




function Converted ({duration}){
    var seconds=duration/1000;
    var hours=parseInt(seconds/3600);
        seconds=seconds%3600
    var minute=parseInt(seconds/60);
        seconds=seconds%60
     return hours+":"+minute+":"+seconds;
}

console.log(Converted(863560000))

    


function Timer({duration}){
  
    return(

<div className='time'> 
 {Converted({duration})}
 
</div>
);
}



    
  

    

      
    

export default Timer;
