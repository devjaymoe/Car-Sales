const REMOVE_FEATURE = 'REMOVE_FEATURE'; // action type

export const removeItem = item => { // action creator
    // dispatch an action here to remove an item
    // console.log(item)
    return { // action
        type: REMOVE_FEATURE,
        payload: item
    }
};

export const ADD_NEW_FEATURE = 'ADD_NEW_FEATURE'; // action type

export const addItem = item => { // action creator
    // dipsatch an action here to add an item
    // console.log(item)
    return { // action
        type: ADD_NEW_FEATURE, 
        payload: item 
    } 
};