import { Router } from 'react-router-dom'
import Layouts from '../common/Layouts'
import { createBrowserHistory } from 'history'
export default function Routes() {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Layouts/>
        </Router>
    )
}