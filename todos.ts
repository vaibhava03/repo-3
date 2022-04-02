import { Router } from 'express';
import { Todo } from '../models/todo';
const router=Router();let todos: Todo[]=[];

router.get('/', (req, res, next) =>{
res.status(200).json( { todos :todos});

});

router.post('/todo', (req, res, next) =>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    console.log(todos);
});

router.delete('/todo/:todoId',(req, res, next) =>{
const todo_id=req.params.todoId;
todos=todos.filter(todoDel=>todoDel.id!==todo_id);
res.sendStatus(200);
})

router.patch('/todo/:todoId',(req, res, next) =>{
    const todo_id=req.params.todoId;
    const index=todos.findIndex(todoPatch =>todoPatch.id===todo_id);
    if(index) {
        todos[index]={id:todos[index].id,text:req.body.text}
    }
})
export default router