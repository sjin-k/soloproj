import React from 'react';

const Tasks = (props) => {
  const taskString = props.data.slice(1, -1).split(',');
  function deleteTask () {
    fetch(`/api/delete/${taskString[0]}`,
      {
        method: 'DELETE'
      }
    );
    window.location.reload();
  }
  function updateTask () {
    fetch(`/api/update/${taskString[0]}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: null,
          task,
          description
        })
      });
  }
  return (
    <div className='task'>
      <p>{taskString[1]}</p>
      <p>{taskString[2]}</p>
      <button
      onClick={deleteTask}
      >remove</button>
    </div>
  );
};

export default Tasks;
