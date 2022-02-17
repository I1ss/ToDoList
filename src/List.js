import React from "react";
import Button from "@material-ui/core/Button";

export default function List({task, setTask}){
    function removeTask(id){
        let newList = [...task].filter((item) => item.id!==id);
        setTask(newList);
    }
    return (
        <div>
            {
            task.map((item)=>(
                <div>
                    <div>{item.text}</div>
                    <Button onClick={()=>removeTask(item.id)} variant="outlined">Удалить</Button>
                </div>
            ))
            }
        </div>
    );
}