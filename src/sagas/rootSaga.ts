import { takeLatest, put, call } from 'redux-saga/effects';

import { CreateProductDto, ProductDto, UpdateProductDto } from '@apptypes/ProductDto';
import { createProduct, fetchProducts } from '@features/products/services/products';

// type Products = NonNullable<Awaited<ReturnType<typeof fetchProducts>>>;

type ProductAction = {
  action: 'CREATE_PRODUCT_REQUESTED';
  payload: CreateProductDto | UpdateProductDto;
};

// function* customCall(...args) {
//   return yield call(...args);
// }

function* fetchProductsSaga(action) {
  try {
    // 1. basic redux-saga
    // const result = yield call(fetchProducts);

    // 2. working
    const result: ProductDto[] = yield call(fetchProducts);

    // 3. typed-redux-saga disables types error, but result is any
    // const result = yield* customCall(fetchProducts); //

    yield put({ type: 'PRODUCTS_FETCH_SUCCEEDED', result });
  } catch (error) {
    yield put({ type: 'PRODUCTS_FETCH_FAILED' });
  }
}

function* createProductSaga(action: ProductAction) {
  try {
    // 2. working
    const result = yield call(createProduct, action.payload);
    console.log('inside saga: ', result);

    // 3. typed-redux-saga disables types error, but result is any
    // const result = yield* customCall(fetchProducts); //

    yield put({ type: 'PRODUCTS_FETCH_REQUESTED' });
  } catch (error) {
    //
  }
}

export function* rootSaga() {
  // call for products
  // -> dispatch product reducer
  yield takeLatest('PRODUCTS_FETCH_REQUESTED', fetchProductsSaga);

  yield takeLatest('CREATE_PRODUCT_REQUESTED', createProductSaga);
}
