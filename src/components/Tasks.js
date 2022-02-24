import React, { useState, useEffect, createContext } from 'react';
import TaskCard from "./TaskCard"
import BoxTarget from './BoxTarget';
import BoxStart from './BoxStart';
export const CardContext =createContext({
	markAsDone:null
})
const Tasks = () => {
    const [taskList, setTaskList] = useState([
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Chores',
			title: 'Buy dog food',
			details: 'Gotta make my woof woof happy 🐕',
		},
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Shopping',
			title: 'Buy Milk',
			details: 'Remember, remember the lactose free aisle... 🥛',
		},
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Chores',
			title: 'Renew Gym Membership',
			details: 'Gotta keep the muscles happy! 💪🏻',
		},
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Chores',
			title: 'Buy dog food',
			details: 'Gotta make my woof woof happy 🐕',
		},
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Shopping',
			title: 'Buy Milk',
			details: 'Remember, remember the lactose free aisle... 🥛',
		},
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Chores',
			title: 'Renew Gym Membership',
			details: 'Gotta keep the muscles happy! 💪🏻',
		},
    ]);
    
    const markAsDone = _id => {
		const task = taskList.filter((task, i) => task._id === _id);
		task[0].status = 'done';
		setTaskList(taskList.filter((task, i) => task._id !== _id).concat(task[0]));
    };
	
	
	const markAsWip = _id => {
		const task = taskList.filter((task, i) => task._id === _id);
		task[0].status = 'wip';
		setTaskList(taskList.filter((task, i) => task._id !== _id).concat(task[0]));
    };

	console.log("taskList",taskList)
    return ( 
		<CardContext.Provider value={{markAsDone,markAsWip}}>
        <div style={{display:'grid',gridTemplateColumns:"1fr 1fr",columnGap:20}}>
                <div>
                    Tasks start
					<BoxStart>

                    {taskList
							.filter((task, i) => task.status === 'wip')
							.map((task, i) => (
								<TaskCard
								key={task._id.toString()}
								_id={task._id}
								category={task.category}
								title={task.title}
								details={task.details}
								onclick={()=>{markAsDone(task._id)}}
								/>
								))}
					</BoxStart>
                </div>

				<div>
                    Tasks done
					<BoxTarget>
						{taskList
								.filter((task, i) => task.status === 'done')
								.map((task, i) => (
									<TaskCard
										key={task._id.toString()}
										_id={task._id}
										category={task.category}
										title={task.title}
										details={task.details}
										onclick={()=>markAsWip(task._id)}
									/>
								))}

					</BoxTarget>
                </div>
        </div>
		</CardContext.Provider>
     );
}
 
export default Tasks;