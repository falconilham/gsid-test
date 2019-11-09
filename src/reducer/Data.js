export function makeActionCreator(type, ...argNames) {
    return function(...args) {
       const action = { type }
       argNames.forEach((arg, index) => {
          action[argNames[index]] = args[index]
       })
       return action
    }
}

const INITIAL_STATE = {
    Data: []
}


function handleAddItem(state, payload){
    return {
       ...state,
       Data: payload.item
    }
}

function handleDeleteAllItem(state){
    return {
       ...state,
       Data: []
    }
}

const ACTION = {
    'ARTICLE/ADD_ITEM': handleAddItem,
    'ARTICLE/DELETE_ITEM': handleDeleteAllItem
}

export const addItem = makeActionCreator('ARTICLE/ADD_ITEM', 'item')
export const deleteAllItem = makeActionCreator('ARTICLE/DELETE_ITEM')

export default function users(state = INITIAL_STATE, action) {
    const handler = ACTION[action.type];
    state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
    return handler ? handler(state, action) : state;
}