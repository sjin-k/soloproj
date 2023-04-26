import React, { useState, useEffect } from 'react';
import Task from './Task.jsx';

const TasksDisplay = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/list')
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setData(response);
      });
  }, []);
  return (
    <div id='tasksDisplay'>
      {data.map((obj, index) => {
        return <Task data={obj.row} key={index}></Task>;
      })}
    </div>
  );
};

export default TasksDisplay;
