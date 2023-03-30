import { legacy_createStore as createStore } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from "./Reducer/Index";

const persistConfig={
  key:'persist-key',
  storage
}
const rootpersistReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  rootpersistReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);
export { persistor };

export default store;
