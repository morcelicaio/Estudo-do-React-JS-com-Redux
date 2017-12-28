import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about';

export default props =>(    

    //path é a rota chamada na url. Conforme tal rota é chamada, ela carrega o componente correspondete a ela na tela.
       // se chamar a rota todos,  ele irá renderizar o component Todo  na tela.
    //O Redirect quando vier qualquer outra url sem ser as declaradas, ele ira redirecionar para a url '/todos'.
    <Router history={ hashHistory } >         
        <Route path="/todos" component={ Todo } />
        <Route path="/about" component={ About } />
        <Redirect path="*" to="/todos" /> 
    </Router>
);