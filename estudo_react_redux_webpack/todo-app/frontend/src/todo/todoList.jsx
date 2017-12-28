import React from 'react';

// import do connect que é quem vai conectar esse componente com os dados que estão na store e com as actions também.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markAsDone, markAsPending, removeTodo } from './todoActions';

import IconButton from '../template/iconButton';

const TodoList = props => {

    const renderRows = () => {        
        const list = props.list;

        return list.map( itemList => (
            <tr key={ itemList._id } > 
                <td className={ itemList.done ? 'markedAsDone' : '' } > { itemList.description } </td>
                <td> 
                    <IconButton style='success' icon='check' hide={ itemList.done } onClick={ () => props.markAsDone(itemList) } /> 
                    <IconButton style='warning' icon='undo' hide={ !itemList.done } onClick={ () => props.markAsPending(itemList) }  />
                    <IconButton style='danger' icon='trash-o' hide={ !itemList.done } onClick={ () => props.removeTodo(itemList) } />
                </td>                
            </tr>
        ));
    }

    return (
        <table className="table" >
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions" >Ação</th>
                </tr>                  
            </thead>

            <tbody> 
                { renderRows() }
            </tbody>

        </table>
    )
}

// criando o método que vai mapear o estado lá do redux com as props do meu objeto (mapStateToProps)
// mapeou a prop 'list' deste componente para receber o valor 'list' do redux que vem da chave 'todo' que está dentro do 
// arquivo reducers.js .  A chave todo contém um objeto que contém um atributo chamado 'list' que retorna uma lista.
const mapStateToProps = state => ( { list: state.todo.list } );

const mapDispatchToPros = dispatch => bindActionCreators( { markAsDone, markAsPending, removeTodo }, dispatch )

// conectando o mapeamento das props do redux
export default connect(mapStateToProps, mapDispatchToPros)(TodoList);