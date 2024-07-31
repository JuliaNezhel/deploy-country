import {Provider} from 'react-redux'

import {Router} from '@/pages/routing'
import {store} from '@/shared/model/store/store'
import AutohideSnackbar from "../entities/errorMassage/error-message";

export function App() {
    return (
        <Provider store={store}>
            <div>
                <AutohideSnackbar/>
                <Router/>
            </div>

        </Provider>
    )
}
