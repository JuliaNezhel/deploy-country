import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import {Country} from './country/country'
import {ListCountries} from './list-countries/list-countries'
import {Page404} from "./404/page404";

const router = createBrowserRouter([
    {
        element: <ListCountries/>,
        path: 'deploy-country/',
    },
    {
        element: <Country/>,
        path: 'deploy-country/:country',
    },
    {
        element: <Page404/>,
        path: '/error',
    },
])

export const Router = () => {
    return <RouterProvider router={router}/>
}
