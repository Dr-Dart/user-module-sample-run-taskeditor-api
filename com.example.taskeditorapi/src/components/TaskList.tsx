import React, { useState } from 'react';
import useTaskList from '../hooks/useTaskList';
import { ModuleContext } from 'dart-api';

type Props = {
  moduleContext: ModuleContext;
};
const TaskList = ({ moduleContext }: Props) => {
  const { taskList, getTaskList, selectProgram } = useTaskList({
    moduleContext,
  });

  const [selectedTask, setSelectedTask] = useState('');

  return (
    <section style={{ margin: '20px' }}>
      <h1>Task Editor API Sample</h1>
      <p>
        Source code:{' '}
        <a
          href="https://github.com/Dr-Dart/user-module-sample-run-taskeditor-api"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline', margin: '10px 0' }}
        >
          https://github.com/Dr-Dart/user-module-sample-run-taskeditor-api
        </a>
      </p>

      <p style={{ marginTop: '20px', fontSize: '1.6rem' }}>
        selected task : {selectedTask}
      </p>

      <button
        type="button"
        onClick={() => {
          getTaskList();
        }}
        style={{
          display: 'block',
          margin: '10px 0',
          border: '1px solid black',
          padding: '8px 12px',
          cursor: 'pointer',
        }}
      >
        Get task lists
      </button>

      <button
        style={{
          margin: '10px 0',
          border: '1px solid black',
          padding: '8px 12px',
          cursor: 'pointer',
        }}
        type="button"
        onClick={() => {
          selectProgram(selectedTask);
        }}
      >
        Click here to set selected program as current program
      </button>

      {taskList.map((task) => (
        <div
          key={task}
          onClick={() => {
            setSelectedTask(task);
          }}
          style={{
            marginBottom: '4px',
          }}
        >
          task name : {task},
        </div>
      ))}
    </section>
  );
};

export default TaskList;
