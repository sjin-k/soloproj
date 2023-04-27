import React from 'react';
import CreateTask from './CreateTask.jsx';
import TasksDisplay from './TasksDisplay.jsx';

const Container = () => {
  return (
    <div id='container'>
      <div id='hContainer'>
        <h1>Read To Do List</h1>
        <button
          onClick={() => { alert(`Your computer might be at risk! `); }}
          id='closeButton'
        />
      </div>
      <TasksDisplay/>
      <CreateTask/>
    </div>
  );
};

export default Container;
