import React from 'react'

const TaskItem = (task, index) => {
    return <li key={index} className='task__item'>{task}</li>
}
export default function TaskList(props) {
    const {taskList} = props;
    return (
        <ul className='task__list'>
            {taskList.map((task, index) => {
                return TaskItem(task, index);
            })}
        </ul>
  )
}

