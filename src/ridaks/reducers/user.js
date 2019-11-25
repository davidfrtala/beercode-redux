const TOGGLE_PRO = 'user/TOGGLE_PRO';

const initState = {
  isPro: false
};

// reducer
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_PRO:
      return {
        ...state,
        isPro: !state.isPro
      };

    default:
      return state
  }
};

// actions
export function togglePro() {
  return {
    type: TOGGLE_PRO
  }
}
