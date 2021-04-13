import { Layout } from 'antd';
import Footers from './CommonLayout/Footers/Footers'
import Headers from './CommonLayout/Headers/Headers'
import Sidebar from './CommonLayout/Sidebar/Sidebar'
import Content from '../components/Contents'
export default function Layouts() {

    return (<>
        <Layout>
            <Sidebar />
            <Layout>
                <Headers />
                <Content />
                <Footers />

            </Layout>
        </Layout>
    </>)
}
