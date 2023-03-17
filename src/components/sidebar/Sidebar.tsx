import React from 'react';
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes, useRoutes } from 'react-router-dom';
import Login from '../../login';
import Chemical from '../Chemical';
import Loginsuccess from '../loginsuccess';
import BasicExample from '../Narbar_menu';
// import BasicExample from '../Narbar_menu';

// import AccountAddView from './account/AccountAddView';
// import AccountDetailView from './account/AccountDetailView';
// import AccountLayout from './account/AccountLayout';
// import AccountListView from './account/AccountListView';

// import MainLayout from './main/MainLayout';
// import MainView from './main/MainView';

// import PageNotFoundView from './error/PageNotFoundView';
const router = createBrowserRouter([
    {
        element: <BasicExample />,
        children: [
            {
                path: "/",
                element: < Login />
            },
            {
                path: "/Loginsuccess",
                element: < Loginsuccess />
            },
            {
                path: "/Chemical",
                element: < Chemical />
            }
        ]
    }
])

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
// function App() {
//     return (
//         <div className='App'>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path='/' element={<Login />} />
//                     <Route path='/about' />
//                     <Route path='/contact' />
//                     <Route path='/portfolio' />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }
export default App;