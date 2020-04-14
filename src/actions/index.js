export const removeFeature = item => {
    // dispatch an action here to remove an item
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