import React, { useState, useEffect } from 'react';
import Task from './Task.jsx';

const TasksDisplay = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/list')
      .then(response => response.json())
      .then(response => {
        setData(response);
      });
  }, []);
  return (
    <div id='tasksDisplay'>
      {data.map(el => el.row.slice(1, -1).split(',')).sort((a, b) => a[0] - b[0]).map((el, index) => {
        return <Task data={el} key={index}></Task>;
      })}
    </div>
  );
};

export default TasksDisplay;
