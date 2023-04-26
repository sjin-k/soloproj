import React from 'react';
import CreateTask from './CreateTask.jsx';
import TasksDisplay from './TasksDisplay.jsx';

const Container = () => {
  return (
    <div id='container'>
      To Do List
      <CreateTask/>
      <TasksDisplay/>
    </div>
  );
};

export default Container;
