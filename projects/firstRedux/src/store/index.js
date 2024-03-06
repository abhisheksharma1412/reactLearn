import {createStore} from "redux";

const INITIAL_VALUE={
    counter:0,
    privacy:false
}

const myReducer=(store=INITIAL_VALUE,action)=>{
    let newStore=store;

    if(action.type=="INCREMENT"){
        newStore={...store,counter :store.counter+1};
    }
   else if(action.type=="DECREMENT"){
        newStore={...store,counter :store.counter-1};
    }
    else if(action.type=="ADDITION"){
        newStore={...store,counter :store.counter+Number(action.payload.num)};
    }
    else if(action.type=="DIFFERENCE"){
        newStore={...store,counter :store.counter-Number(action.payload.num)};
    }
    else if(action.type==="PRIVACY_TOGGLE"){
        newStore={...store, privacy:!store.privacy};
    }

    return newStore;
}


// const myReducer=(store=INITIAL_VALUE,action)=>{
//     let newStore=store;

//     if(action.type=="INCREMENT"){
//         newStore={counter :store.counter+1, privacy:store.privacy};
//     }
//    else if(action.type=="DECREMENT"){
//         newStore={counter :store.counter-1, privacy:store.privacy};
//     }
//     else if(action.type=="ADDITION"){
//         newStore={counter :store.counter+Number(action.payload.num), privacy:store.privacy};
//     }
//     else if(action.type=="DIFFERENCE"){
//         newStore={counter :store.counter-Number(action.payload.num), privacy:store.privacy};
//     }
//     else if(action.type==="PRIVACY_TOGGLE"){
//         newStore={counter:store.counter, privacy:!store.privacy};
//     }

//     return newStore;
// }

const myStore=createStore(myReducer);

export default myStore;


