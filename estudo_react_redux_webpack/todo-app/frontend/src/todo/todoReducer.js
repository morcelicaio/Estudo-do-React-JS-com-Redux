const INITIAL_STATE = { 
    description: '',
    list: []
}  

//Criando a função que representa o reducer.
// O reducer recebe o estado atual e uma action. E sempre que uma action for executada os reducers da aplicação 
// são chamados e então é vc diz se quer mudar o estado dentro desse reducer ou se vc quer manter o estado da msm forma.
export default (state = INITIAL_STATE, action) => {
    // verificando qual é a ação que foi chamada
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }  // retorna um objeto novo que é o novo estado evoluído.   
        case 'TODO_SEARCHED':            
            return { ...state, list: action.payload }     
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        
        default:
            // caso nao for nenhuma das actions  criadas ele retorna o estado sem nenhuma alteração.
            return state
    }
}
