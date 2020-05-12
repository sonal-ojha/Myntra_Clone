// create a Store
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Import Reducers
import { getAllBoysDetails } from './reducers/getAllBoysDetails';
import { updateBagData } from './reducers/updateBagDetails';

const AllReducers = combineReducers({
  boysProductDetails: getAllBoysDetails,
  cartData: updateBagData,
  wishlistData: [],
})

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(thunk)) );

export default store;