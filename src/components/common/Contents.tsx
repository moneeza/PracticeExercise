import { Switch, Route, Redirect, } from 'react-router-dom'
import Forms from '../SeperateComponents/Forms'
import Results from '../SeperateComponents/Results'
import { Layout} from 'antd';


export default function Contents() {
    const { Content } = Layout;
    return (<Content>
        <Switch>
            <Redirect from="/" exact to="/comp1" />
            <Route component={Forms} exact path="/comp1" />
            <Route component={Results} exact path="/comp2" />
        </Switch>
    </Content>)
}