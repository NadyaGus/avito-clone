import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ROUTER_PATHS } from './paths';

const APP_ROUTER = createBrowserRouter([
  {
    path: ROUTER_PATHS.root,
    element: <Navigate to={ROUTER_PATHS.list} replace />,
  },
  {
    path: ROUTER_PATHS.list,
    element: <div>list</div>,
  },
  {
    path: ROUTER_PATHS.form,
    element: <div>form</div>,
  },
  {
    path: ROUTER_PATHS.item,
    element: <div>item</div>,
  },
]);

export { APP_ROUTER };
