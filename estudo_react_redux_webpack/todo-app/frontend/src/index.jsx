import React from 'react';
import ReactDOM from 'react-dom';

// fazendo a integracao entre o react e o redux.
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './main/reducers';

//middlewares
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import App from './main/app';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// criando a constante store que recebe o resultado do metodo createStore que recebe
// como parâmetro os reducers criados no arquivo reducers.js
// O resultado do metodo createStore vai criar o objeto 'estado' da minha aplicação que tem tudo do estado
// que irá ser controlado pelo redux.  
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools);

ReactDOM.render(
    // envolvendo a aplicação dentro da tag Provider que possui a store.
    // A tag Provider possuindo a store, ela consegue transmitir a store para todos as tags dentro da aplicação.
    <Provider store={ store } > 
        <App />
    </Provider>, document.getElementById("app")
);
 