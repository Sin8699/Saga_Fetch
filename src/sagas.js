import { takeLatest, call, put } from "redux-saga/effects";
var Page=1;

export function* watcherSaga() {
  console.log("WATCHERSAGA");
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchProductsApi() {
  console.log("FETCH");
  return fetch(
    `https://api.unsplash.com/photos?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02&page=${Page}`
  )
    .then(res => (res.json()))
    .catch(err =>{throw(err)});
}

function* workerSaga() {
  try {
    var response = yield call(fetchProductsApi);
    console.log(Page);
    Page++;
    yield put({ type: "API_CALL_SUCCESS", response });
  } catch (error) {
    console.log(error);
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
