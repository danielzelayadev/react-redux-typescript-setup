import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from './sagas';
import { IStore } from './types';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState?: IStore) {
  const store = createStore(
    reducer,
    initialState || {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagas.forEach(saga => sagaMiddleware.run(saga));

  return store;
}
