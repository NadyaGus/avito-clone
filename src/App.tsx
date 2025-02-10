import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { APP_ROUTER } from './router/createRouter';

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={APP_ROUTER} />
    </MantineProvider>
  );
}

export default App;
