import React from 'react'
import { Link, Switch, Router, Route, Redirect, } from 'react-router-dom'
import App1 from './App'
import Footer1 from './Footer1'
import { Layout, Menu } from 'antd';
import { createBrowserHistory } from 'history';
export default function App() {
    const { Header, Footer, Sider, Content } = Layout;
    const history = createBrowserHistory();
    return (<>
        <Router history={history}>
            <Layout>
                <Sider>
                    <div className="d-flex flex-column align-items-center justify-content-center bg-transparent" style={{ marginTop: "5rem" }}>
                        <Router history={history}>
                            <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']} className="w-100 text-center">
                                <Menu.Item key="1">
                                    <Link to="/comp1">
                                        <div>Login</div>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/comp2">

                                        <div> Results</div>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Router>
                    </div>
                </Sider>
                <Layout>
                    <Header className="d-flex justify-content-center align-items-center text-white">
                        <div>CACF</div>
                    </Header>
                    <Content>
                        <Switch>
                            <Redirect from="/" exact to="/comp1" />
                            <Route component={App1} exact path="/comp1" />
                            <Route component={Footer1} path="/comp2" />
                        </Switch>
                    </Content>
                    <Footer className="mt-3 text-center">CACF</Footer>
                </Layout>
            </Layout>
        </Router>
    </>)
}