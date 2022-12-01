import React from 'react';
import './IconLogo.style.css';
// import clsx from 'clsx';
// const classNameOne = "whiteIconButton";
// const classNameTwo = "blueIconButtom";

const IconLogo = ({onClick, children}) => {
    const handleClick = (e) => {
        e.stopPropagation();
        if(onClick){
            onClick(e);
        }}
  
  return (
    <div  className='IconButtom' onClick={handleClick}>{children}</div>
  )}

export default IconLogo;