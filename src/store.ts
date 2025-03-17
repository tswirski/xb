import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'sagas/rootSaga';

type Action = {
  type: 'increment' | 'decrement';
  // payload?: any;
};

type ProductAction = {
  type:
    | 'PRODUCTS_FETCH_REQUESTED'
    | 'PRODUCTS_FETCH_FAILED'
    | 'PRODUCTS_FETCH_SUCCEEDED'
    | 'CREATE_PRODUCT_REQUESTED';
  // payload?: any;
};

type State = {
  count: number;
};

const INITIAL_STATE = {
  count: 0,
};

const PRODUCTS_INITIAL_STATE = {
  list: [],
};

const testReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }; //
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }; //
    default:
      return state;
  }
};

const productsReducer = (state: State = PRODUCTS_INITIAL_STATE, action: ProductAction) => {
  switch (action.type) {
    case 'PRODUCTS_FETCH_REQUESTED':
      return {
        ...state,
      }; //
    case 'PRODUCTS_FETCH_SUCCEEDED':
      return {
        ...state,
      }; //
    case 'PRODUCTS_FETCH_FAILED':
      return {
        ...state,
      };
    case 'CREATE_PRODUCT_REQUESTED':
      return {
        ...state,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  test: testReducer,
  products: productsReducer,
});

// const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [sagaMiddleware];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})
