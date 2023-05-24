// The actions to add, remove and toggle a task
export const addTask = (title) => {
    return { type: 'ADD_TASK', payload: { id: new Date().getTime().toString(), title, completed: false } };
};

export const removeTask = (id) => {
    return { type: 'REMOVE_TASK', payload: id };
};

export const toggleTask = (id) => {
    return { type: 'TOGGLE_TASK', payload: id };
};
