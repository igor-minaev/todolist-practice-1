import React from 'react';
import {DataType} from './App';

type TasksPropsType = {
    data: DataType
}

export const Tasks: React.FC<TasksPropsType> = ({data}) => {
    return (
        <div>
            <h3>{data.title}</h3>
            <ul>
                {data.tasks.map(t => {
                    return (
                        <li key={t.taskId}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {data.students.map(s => {
                    return (
                        <li key={s}>{s}</li>
                    )
                })}
            </ul>
        </div>
    );
};
