import axios from 'axios';

const URL = 'http://localhost:3000/api/todos'; // referência para a URL padrão do serviço.


//criando a actionCreator changeDescription 
export const changeDescription = (event) => (
    // retorna um objeto que representa o evento
    // Obrigatoriamente tem um atributo 'type'   e um atributo opcional 'payload'
    { 
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value
    }
);


//criando a actionCreator de busca.
export const search = () => {
    //Aqui está se pegando o estado atual dentro da actionCreator usando o metodo getState.    
    return( dispatch, getState ) =>{
        const description = getState().todo.description  // recuperando o atributo description do estado.
                                                    // regex que busca os valores contido na string.
        const search = description ? `&description__regex=/${ description }/` : '';        
        const request = axios.get(`${ URL }?sort=-createdAt${ search }`)
            .then( resp => dispatch( { type: 'TODO_SEARCHED', payload: resp.data } ) );

        //Resumindo: Dentro do metodo search  ele recupera a store (o estado que está lá) e recupera o atributo
        // description do estado e passa essa description para a regex. A requisicao é feita e retorna a lista
        // de todos de acordo com a regex passada. Se for passado vazio então retorna a lista inteira de todos.
    }
       
   
}

//criando a actionCreator de adicionar 'todo'.
export const addTodo = description => {
    // usando o middlewara thunk aqui.
      // recebe o dispatch como parametro  e  usa o dispatch para poder chamar mais de uma action depois.
    return dispatch => {

         // a const request recebe a requisicao post feita pelo axios passando a url da api e passando um   
        // objeto que tem o atributo description nele. Essa sintaxe já é a sintaxe reduzida do ecmaScript 2015 
        // A mesma coisa seria:   const request = axios.post(URL, { description: description })
        axios.post(URL, { description } )
            .then( resp => dispatch( clearForm() ))
            .then(resp => dispatch( search() ))
        
    }
}

//criando a actionCreator de marcar 'todo' como feita.
export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${ URL }/${ todo._id }`, { ...todo, done: true } )
            .then( resp => dispatch( search() ) )
    }
}

//criando a actionCreator de marcar 'todo' como não feita (pendente).
export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${ URL }/${ todo._id }`, { ...todo, done: false } )
            .then( resp => dispatch( search() ) )
    }
}

export const removeTodo = todo => {
    return dispatch => {
        axios.delete(`${ URL }/${ todo._id }`)
            .then(resp => dispatch( search() ) )
    }
}

export const clearForm = () => {
    // usando o middleware multi que permite disparar 2 actionCreators seguidas.
    return [
               { type: 'TODO_CLEAR' }, 
               search()
           ]
}