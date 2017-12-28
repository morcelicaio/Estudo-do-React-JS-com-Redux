import React from 'react';
import { connect } from 'react-redux'; // faz a integração entre do react com o redux
import { bindActionCreators } from 'redux'; // faz a ligação das actionCreators com esse componente
import { changeDescription, search, addTodo, clearForm } from './todoActions';  // importando os actionCreators

import Grid from '../template/grid';
import IconButton from '../template/iconButton';


class TodoForm extends React.Component{
    constructor(props){
        super(props);

        this.keyHandler = this.keyHandler.bind(this);         
    }

    componentWillMount(){        
        this.props.search()
    }

    // metodo para teclas de atalho
    //recebe o evento da tecla apertada por parametro.
    keyHandler(event){

        // extraindo os atributos de um objeto.
        // quero que extraia do atrib. props os metodos addTodo e search e o atrib. description.         
        const { addTodo, search, description, clearForm } = this.props; 

         // se a tecla apertada foi enter entra.
         if(event.key === "Enter"){
            // verifica se a tecla shift está apertada. 
            // Se estiver realiza a busca, senao adiciona um novo item.
            event.shiftKey ? search() : addTodo(description);
        }   else if(event.key === "Escape"){    // se apertou esc
                clearForm();
            }
    }

    render(){
        // extraindo os atributos que vem do objeto props.
        const { addTodo, search, description, clearForm } = this.props;

        return (
            <div role="form" className="todoForm" > 
                <Grid cols="12 9 10" >
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa" 
                    value={ this.props.description } onChange={ this.props.changeDescription } onKeyUp={ this.keyHandler } />
                </Grid>
                
                <Grid cols="12 3 2" >
                    <IconButton style="primary" icon="plus"  onClick={ () => addTodo(description) }> </IconButton>
                    <IconButton style="primary" icon="search" onClick={ search } > </IconButton>
                    <IconButton style="default" icon="close" onClick={ () => clearForm() }  > </IconButton>
                </Grid>        
            </div>    
        );        
    }
}

// criando o método que vai mapear o estado lá do redux com as props do meu objeto (mapStateToProps)
// mapeou a prop 'description' deste componente p receber o valor 'description' do redux q vem da chave 'todo' q está 
// dentro do arquivo reducers.js . A chave 'todo' contém um objeto q contém um atributo chamado 'description'.
const mapStateToProps = state => ( {description: state.todo.description} );

// fazendo a ligação do dispatch (que dispara a ação e manda para os reducers) com nossos actionsCreators.
const mapDispatchToProps = dispatch => bindActionCreators( { changeDescription, search, addTodo, clearForm }, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);