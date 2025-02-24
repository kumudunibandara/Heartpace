import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { ErrorBoundary } from "react-error-boundary";
import Dashboard from './components/dashboard/DashBoard';
import ErrorAlert from './components/dashboard/components/ErrorAlert';


function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong host app</div>}>
      <Provider store={Store}>
        <div>
          <Suspense fallback={<div>Loading Remote Application...</div>}>
            <ErrorAlert />
            <Dashboard />
          </Suspense>
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;