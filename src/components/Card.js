import React,{ useRef } from 'react';

export default function Card({url, item, addChosenCard, index}) {
    let itemReference = useRef(null);
    const flipCard= (e)=>{
        e.target.src = item.img;
        console.log(item.img);
        addChosenCard(itemReference);
    }
  return (
    <div>
        <img 
            className={item.hidden?'hidden':''}
            ref={itemReference}
            src={url} 
            alt={item.name} 
            onClick={(e)=>flipCard(e)}
            data-id={index} 
        />
    </div>
  );
}
