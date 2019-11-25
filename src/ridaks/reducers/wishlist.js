import uuid from "uuid/v4";

const ADD_ITEM = 'wishlist/ADD_ITEM';
const DELETE_ITEM = 'wishlist/DELETE_ITEM';
const MODAL_OPEN = 'wishlist/MODAL_OPEN';
const MODAL_CLOSE = 'wishlist/MODAL_CLOSE';

const initState = {
  dialogOpen: false,
  items: [
    { id: uuid(), title: "Red Dead Redemption 2" },
    { id: uuid(), title: "Death Stranding" },
    { id: uuid(), title: "Cyberpunk 2077" },
    { id: uuid(), title: "The Last Of Us 2" },
  ]
};

export const reducer = (state = initState, action) => {
  switch (action.type) {

    case ADD_ITEM:
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

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };

    case MODAL_OPEN:
      return {
        ...state,
        dialogOpen: true
      };

    case MODAL_CLOSE:
      return {
        ...state,
        dialogOpen: false
      };

    default:
      return state
  }
};

// actions
export function addItem(title) {
  return {
    type: ADD_ITEM,
    title
  }
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  }
}

export function modalOpen() {
  return {
    type: MODAL_OPEN
  }
}

export function modalClose() {
  return {
    type: MODAL_CLOSE
  }
}
