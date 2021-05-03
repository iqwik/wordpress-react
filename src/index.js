const { element } = wp;
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { namespace } from './redux/namespace';
import createStore from './redux/store';
import reducers from './redux/reducers';
import App from './App';

const getReducers = () => ({
    [namespace]: reducers,
});

const store = createStore(
    getReducers(),
    createHashHistory(),
    {},
);

element.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
