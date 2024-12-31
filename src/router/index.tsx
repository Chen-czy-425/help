import Home  from '../pages/home/Home';

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
            }
        ]
    },
])

export default router;