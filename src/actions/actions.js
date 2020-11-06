export const ADD = 'ADD'
export const DELETE = 'DELETE'

export const addFeature = (newFeature) => {
    return { type: ADD, payload: newFeature}
}

export const deleteFeature = (remove) => {
    return { type: DELETE, payload: remove}
}