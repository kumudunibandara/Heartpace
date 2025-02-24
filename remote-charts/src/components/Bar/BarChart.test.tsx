
import { vi, Mock } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react';
import BarChart from './BarChart';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as UserService from '../../services/UserService';


const mockStore = configureStore([]);
const initialState = { layout: { theme: 'light' } };

const fakeUsers = [
    { id: 1, name: "Alice", age: 30, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 35, city: "New York" },
    { id: 4, name: "David", age: 40, city: "Chicago" },
];

vi.mock('../../services/UserService', () => ({
    getUsersInfo: vi.fn(),
}));

const mockedGetUsersInfo = UserService.getUsersInfo as Mock;

describe('BarChart Component', () => {
    beforeEach(() => {
        mockedGetUsersInfo.mockResolvedValue({ rows: fakeUsers });
    });

    it('renders the total record count and cities correctly', async () => {
        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <BarChart />
            </Provider>
        );
        await waitFor(() => {

            expect(screen.getByText(String(fakeUsers.length))).toBeTruthy();
            expect(screen.getByText(/New York/i)).toBeTruthy();
        });
    });
});
