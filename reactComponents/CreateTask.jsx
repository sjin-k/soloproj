import React, { useState } from 'react';

const CreateTask = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  function handleClick (e) {
    // e.preventDefault();
    fetch('/api/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: null,
          task,
          description
        })
      });
  }
  return (
    <div id='createTask'>
      <form
      onSubmit={handleClick}
      >
        <input
        type="text"
        className='formInput'
        id='taskInput'
        placeholder='task'
        required
        onChange={e => {
          setTask(e.target.value);
        }}
         />
        <input
        type="text"
        className='formInput'
        id='descriptionInput'
        placeholder='description'
        onChange={e => {
          setDescription(e.target.value);
        }}
         />
        <input
        type="submit"
        value={'add task'}
        onSubmit={console.log('task added')}
        />
      </form>
    </div>
  );
};

export default CreateTask;
