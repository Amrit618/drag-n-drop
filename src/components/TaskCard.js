import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './items';
const TaskCard = props => {
	const[{isDragging},drag]=useDrag({
		item:{
			type:ItemTypes.CARD,
			id:props._id
		},
		collect:monitor=>({
			isDragging:!!monitor.isDragging(),
		})
	})
	return (
		<div 
		ref={drag}

		style={{background:"green",marginTop:10,opacity:isDragging?"0.5":"1"}} >
			<div justify='space-between' my='2'>
				<div fontSize='lg' fontWeight='semibold'>
					{props.title}
				</div>
				<div
					variantColor={props.category === 'Chores' ? 'green' : 'red'}
					h='100%'>
					{props.category}
				</div>
			</div>
			<div textAlign='center' fontSize='md'>
				{props.details}
			</div>
		</div>
	);
};

export default TaskCard;