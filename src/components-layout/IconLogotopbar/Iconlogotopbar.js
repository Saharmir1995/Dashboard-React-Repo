import React from 'react';
import './Iconlogotopbar.style.css';
// import clsx from 'clsx';
// const classNameOne = "whiteIconButton";
// const classNameTwo = "blueIconButtom";

const IconLogotopbar = ({onClick, children}) => {

    const handleClick = (e) => {
        e.stopPropagation();
        if(onClick){
            onClick(e);
        }}
  
  return (
    <div  className='IconButtomtopbar' onClick={handleClick}>{children}</div>
  )}

export default IconLogotopbar;