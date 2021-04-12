import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';

export default function SideBar() {
    const { Sider } = Layout;
    const [coll, setColl] = useState(false)
    const [key, setKey] = useState("1")
    const handleCllapse = () => {
        coll ? setColl(false) : setColl(true)
    }
    const handleKey = (e:any) => {
        setKey(e.target.key)
    }
    return (<Sider collapsible collapsed={coll} onCollapse={handleCllapse}>
        <div className="d-flex flex-column align-items-center justify-content-center bg-transparent" style={{ marginTop: "5rem" }}>
            <Menu theme="dark" mode="vertical" defaultSelectedKeys={[key]} className="w-100 text-center">
                <Menu.Item key="1" onChange={(e)=>{ handleKey(e) }}>
                    <Link to="/comp1">
                        <div>Login</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" onChange={(e)=>{ handleKey(e) }}>
                    <Link to="/comp2">

                        <div> Results</div>
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    </Sider>)


}