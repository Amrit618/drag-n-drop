import React ,{useEffect,useState}from 'react';
import Tasks from './Tasks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function Todo() {

  return (
    <div className="Todo">
        <DndProvider backend={HTML5Backend}>

      <Tasks />
        </DndProvider>
    </div>
  );
}

export default Todo;
