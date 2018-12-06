const loadStates = () => {
    const state = localStorage.getItem('state');
    return state ? JSON.parse(state) : undefined; 
}

const saveStates = (state) => {
    const stateInJson = JSON.stringify(state);
    localStorage.setItem('state', stateInJson);
}

export { loadStates, saveStates }