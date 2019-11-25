import React from 'react';
import uuid from "uuid/v4";

const wishlistInitState = {
  dialogOpen: false,
  items: [
    { id: uuid(), title: "Red Dead Redemption 2" },
    { id: uuid(), title: "Death Stranding" },
    { id: uuid(), title: "Cyberpunk 2077" },
    { id: uuid(), title: "The Last Of Us 2" },
  ]
};
const userInitState = {
  isPro: false
};

const userReducer = (state = userInitState, action) => {
  switch (action.type) {
    case 'TOGGLE_PRO':
      return {
        ...state,
        isPro: !state.isPro
      };

    default:
      return state
  }
};

const wishlistReducer = (state = wishlistInitState, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: uuid(),
            title: action.title
          }
        ]
      };

    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };

    case 'MODAL_OPEN':
      return {
        ...state,
        dialogOpen: true
      };

    case 'MODAL_CLOSE':
      return {
        ...state,
        dialogOpen: false
      };

    default:
      return state
  }
};

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );

        return nextState;
      },
      {}
    )
  }
};

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  /*
     dispatch({
      type: 'ADD_ITEM',
      title: 'new item'
     });
   */
  const dispatch = (action) => {
    // reduce state
    state = reducer(state, action);
    // notify subscribers
    listeners.forEach(listen => listen());
  };

  const subscribe = listener => {
    listeners.push(listener);

    return () => listeners.filter(list => list !== listener);
  };

  // dispatch a dummy action to init state
  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  }
};

export const StoreContext = React.createContext();

export const store = createStore(combineReducers({
  wishlist: wishlistReducer,
  user: userReducer
}));
