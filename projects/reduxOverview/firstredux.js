const redux=require("redux");

const Initial_Value={
    counter:0
};

const reduxReducer=(store=Initial_Value,action)=>{
    let newStore=store;
    // console.log("reducer called",action);
    if(action.type==="INCREMENT"){
        newStore= {counter:store.counter+1};
    }
    else if(action.type==="DECREMENT"){
        newStore={counter:store.counter-1};
    }
    else if(action.type==="ADDITION"){
        newStore={counter:store.counter+action.payload.number};
    }

    return newStore;
}

const store=redux.createStore(reduxReducer)

const subscriber=()=>{
    const state=store.getState();
    console.log(state);
}

store.subscribe(subscriber);

store.dispatch({type:"INCREMENT"});
store.dispatch({type:"INCREMENT"});
store.dispatch({type:"ADDITION",payload:{number:7}});
// store.dispatch({type:"INCREMENT"});

