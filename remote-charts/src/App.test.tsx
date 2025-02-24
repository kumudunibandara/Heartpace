import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = { layout: { theme: 'light' } };
const store = mockStore(initialState);

describe('App', () => {
    it('renders the App component', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        screen.debug();
    });
});
