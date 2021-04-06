import React from 'react'
import { Link, Switch, Router, Route, Redirect } from 'react-router-dom'
import App1 from './App'
import Footer1 from './Footer1'
import { Layout } from 'antd';
import { createBrowserHistory } from 'history';

export default function App() {
    const { Header, Footer, Sider, Content } = Layout;
    const history = createBrowserHistory();

    return (<>
        <Router history={history}>

            <Layout>

                <Header className="d-flex justify-content-between align-items-center text-white">
                    <div>CACF</div>
                    <div className="d-flex">

                        <Router history={history}>
                            <Link to="/comp1" className="mx-3">Login</Link>
                            <Link to="/comp2" className="mx-3">Results</Link>
                        </Router>

                    </div>
                </Header>

            </Layout>
            <Content>
                <Switch>
                    <Redirect from="/" exact to="/comp1"  />

                    <Route component={App1} exact path="/comp1" />
                    <Route component={Footer1} path="/comp2" />

                </Switch>
            </Content>
            <Footer></Footer>

        </Router>




    </>)


}