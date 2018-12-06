import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadStates, saveStates } from './service/localStorageService';

const initialStore = () => {
    const persistedStates = loadStates();
    const store = createStore(rootReducer, persistedStates);
    console.log('store=> ', store.getState());
    const handlePersistStates = () => {
        saveStates({
            cart: store.getState().cart
        })
    }

    store.subscribe(handlePersistStates);

    return store;
}

export default initialStore;