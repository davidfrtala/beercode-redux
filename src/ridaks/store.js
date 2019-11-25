import React from 'react';

export const combineReducers = (reducers) => {
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

export const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    // reduce state
    state = reducer(state, action);
    // notify subscribers
    listeners.forEach(listen => listen());

    // print the most recent state tree to console (just for debug)
    console.log('ridaks state: ', state);
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

export function connect(mapStateToProps, mapDispatchToProps) {
  return Container => {
    return class extends React.Component {
      static contextType = StoreContext;

      componentDidMount() {
        this.unsubscribeStore = this.context.subscribe(() => this.forceUpdate());
      }

      componentWillUnmount() {
        this.unsubscribeStore();
      }

      render() {
        const store = this.context;

        return (
          <Container
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    }
  }
}
