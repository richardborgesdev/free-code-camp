// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';
const defaultState = {
    messages: []
};

const messageReducer = (
    state = defaultState.messages, 
    action
) => {
  switch(action.type) {
    case ADD:
      // don't mutate state here or the tests will fail
      return [...state, action.message];
    default:
      return state;
  }
};

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

const store = Redux.createStore(messageReducer);
store.subscribe(addMessage);