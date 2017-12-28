import { combineReducers } from 'redux';
import todoReducer from '../todo/todoReducer';


// reducer que vai concatenar todos os outros.
const rootReducer = combineReducers({
    // aqui dentro fica cada um dos reducers declarados. Um para cada chave.
    // Esse objeto é o estado da aplicação que é controlado pelo redux.
    
    // cadastro dos todos.
    todo: todoReducer
});

// exportando o reducer para poder ser usado na configuração do arquivo index.jsx
export default rootReducer;