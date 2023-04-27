import React, { useState } from 'react';

const Tasks = (props) => {
  if (props.data[1].includes(' ')) {
    props.data[1] = props.data[1].slice(1, -1);
  }
  if (props.data[2].includes(' ')) {
    props.data[2] = props.data[2].slice(1, -1);
  }
  const [task, setTask] = useState(props.data[1]);
  const [description, setDescription] = useState(props.data[2]);
  function deleteTask () {
    fetch(`/api/delete/${props.data[0]}`,
      {
        method: 'DELETE'
      }
    );
    window.location.reload();
  }
  function updateTask () {
    fetch(`/api/update/${props.data[0]}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          {
            task,
            description
          }
        )
      }
    );
  }
  return (
    <div className='task'>
      <form onSubmit={updateTask}>
        <input
          type="text"
          className='updateTask'
          onChange={e => {
            setTask(e.target.value);
          }}
          defaultValue={props.data[1]}
        />
        <input
          type="text"
          className='updateDescription'
          onChange={e => {
            setDescription(e.target.value);
          }}
          defaultValue={props.data[2]}
        />
        <input
          type="submit"
          value={'Update'}
        />
      </form>
      <button
        onClick={deleteTask}
      >Delete</button>
    </div>
  );
};

export default Tasks;
