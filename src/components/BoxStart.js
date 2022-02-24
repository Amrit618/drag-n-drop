import React ,{useEffect,useState, useContext}from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './items';
import { CardContext } from './Tasks';

function BoxStart(props) {

    const {markAsWip}=useContext(CardContext)
    const[{isOver},drop] = useDrop({
        accept:ItemTypes.CARD,
        drop:(item,monitor)=>markAsWip(item.id),
        collect:monitor=>({
            isOver:!!monitor.isOver(),
        }),
    })
  return (
    <div className="BoxTarget" 
    style={{background:isOver?"yellow":"pink",
    padding:20}}
    ref={drop}
    >
            {props.children}
    </div>
  );
}

export default BoxStart;
