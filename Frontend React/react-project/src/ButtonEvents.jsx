import React, { useState } from 'react';

function ButtonEvents(){

 {/*  const [buttonText, setButtonText] = useState('Click Me😊');

    const handleClick = () => {
      setButtonText('OUCH!!🤯');
    };
  
    return (
      <button onDoubleClick={handleClick}>{buttonText}</button>
    );

    */}

    
    const imgUrl="./src/assets/Logo.jpeg";

    const handleClick = (e) => e.target.style.display="none";

    return (<img onClick={(e)=>handleClick(e)} src={imgUrl}></img>)


}
export default ButtonEvents