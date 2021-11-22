import './TaskList.css';
import { useEffect, useState } from 'react';
import { Card, Checkbox, Fab, TextField, Button } from '@material-ui/core';
import { findAllDone, findAllPending, setAsDone, setAsPending, save } from './task-service';
import AddIcon from '@material-ui/icons/Add';

export function TaskList({done}) {
 const [tasks, setTaks] = useState([
{
    id: 1,
    title: 'Lavar a louça',
    done: false
},
    {
        id: 2,
        title: 'Lavar o carro',
        done: false
    },
    {
        id: 3,
        title: 'Lavar o PC',
        done: true
    },

 ]);
 return (
        <ul>
            {tasks.filter(task => task.done === done).map(task => {
                return (
                    <Card className = {'item-list-card'}>
                    <Checkbox checked={task.done}value ={task.id}/>
                    {task.title}
                    </Card>
                )
            })}
            </ul>
);
}