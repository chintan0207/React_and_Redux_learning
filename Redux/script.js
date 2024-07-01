import {createStore} from 'redux'
import { productsList } from './productsList'

const countElement = document.getElementById('count')

const initialState = {
    count: 0,
    name: "Chintan",
    age: "21"
}


const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASE_BY = 'post/increaseBy'
const DECREASE_BY = 'post/decreaseBy'

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    case INCREASE_BY:
      return { ...state, count: state.count + action.payload }
    case DECREASE_BY:
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store)

countElement.innerHTML = store.getState().count

store.subscribe(() =>{
    console.log(store.getState())
    countElement.innerHTML = store.getState().count

})

store.dispatch({ type: INCREMENT })
store.dispatch({ type: DECREMENT })
store.dispatch({ type: INCREASE_BY, payload: 15 })
store.dispatch({ type: DECREASE_BY, payload: 5 })

countElement.addEventListener('click',()=>{
  store.dispatch({ type: INCREASE_BY, payload: 15 })
})



// function reducer(state = IntialState, action) {
//     if (action.type === "post/Increament") {
//         return { ...state, count: state.count + 1 }
//     }else if(action.type ==='post/IncreamentBy'){
//         return { ...state, count: state.count + action.payload }
//     }else if(action.type ==='post/DecreamentBy'){
//         return { ...state, count: state.count - action.payload }
//     }

//     return state;
// }


// store.dispatch({type:"post/Increament"})
// store.dispatch({type:"post/IncreamentBy",payload:15})
// store.dispatch({type:"post/DecreamentBy",payload:5})



//behind the redux process

// console.log(reduxState)

// reduxState = reducer(reduxState, { type: "post/Increament" });
// console.log(reduxState)

// reduxState = reducer(reduxState,{type:"post/IncreamentBy",payload:10});
// console.log(reduxState)

// reduxState = reducer(reduxState,{type:"post/DecreamentBy",payload:5});
// console.log(reduxState)



