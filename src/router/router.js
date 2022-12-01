import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/layout'
import MainContainer from '../Container/MainContainer';
import SingleContainer from '../Container/SingleContainer';
import InputContainer from '../Container/InputContainer';


const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [

            {
                path: "/",
                index: true,
                element: <MainContainer />
            },
            {
                path: "/contacts/:id",
                element: <SingleContainer />
            },
            {
                path: "/inputForm/:id",
                element: <InputContainer />
            }
        ]
    }

]);

export default router;