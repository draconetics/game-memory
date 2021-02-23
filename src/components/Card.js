import React from 'react';

export default function Card({url, item, addChosenCard}) {
    const flipCard= (e)=>{
        e.target.src = item.img;
        addChosenCard(item);
    }
  return (
    <div>
        <img 
            src={url} 
            alt={item.name} 
            onClick={(e)=>flipCard(e)} 
        />
    </div>
  );
}
