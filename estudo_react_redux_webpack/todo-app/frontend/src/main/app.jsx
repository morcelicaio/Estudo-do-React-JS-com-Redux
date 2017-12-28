import 'modules/bootstrap/dist/css/bootstrap.min.css';    // importando os arquivos css do projeto
import 'modules/font-awesome/css/font-awesome.min.css';
import '../template/custom.css';

import React from 'react';
import Routes from './routes';

import Menu from '../template/menu';

// componente react utilizando o ecmaScript 6
export default props =>(
    <div className="container" >
        <Menu />
        <Routes />
    </div>
)