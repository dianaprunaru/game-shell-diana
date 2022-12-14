import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Play, FourOhFour } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/play',
    element: <Play></Play>,
  },
  {
    path: '*',
    element: <FourOhFour></FourOhFour>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
