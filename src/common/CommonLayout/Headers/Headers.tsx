import { Layout} from 'antd';

export default function Header() {
    const { Header} = Layout;

    return (<Header className="d-flex justify-content-center align-items-center text-white app-header">
        <div>CACF</div>
    </Header>)
}