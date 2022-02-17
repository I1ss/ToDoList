import React, {useState} from 'react'
import List from './List';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export default function App(){
  const [value, setValue] = useState();
  const [task, setTask] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      text: "Сделать ToDoList!"
    }
  ]);
  function addTask(obj){
    if (!obj){
      return;
    }
    setTask([...task, {
      id: Math.floor(Math.random()*1000),
      text: obj
    }]);
  }
  return (
    <div>
      <Input placeholder = "Введите новую заметку:" value = {value} onChange={(e)=>setValue(e.target.value)}/>
      <Button onClick={()=>addTask(value)} color="secondary" variant="contained" href="#contained-buttons">Добавить</Button>
      <List task={task} setTask = {setTask}/>
    </div>
  );
}
