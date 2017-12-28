import React from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

class Todo extends React.Component{    

    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm />                
                <TodoList />                
            </div>
        );
    }
}

export default Todo;
