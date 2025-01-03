import Home  from '../pages/home';
import Detail from '../pages/detail/index';
import App from '../App'
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,  // 这是默认的子路由
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'detail/:docid',
                element: <Detail />
            }
        ]
    },
])

export default router;