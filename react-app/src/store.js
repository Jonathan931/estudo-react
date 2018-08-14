import { createStore } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';

import reducers from './reducers/index'

const store = createStore(reducers);

export default store;
