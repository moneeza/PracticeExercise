import { shallow, configure } from 'enzyme';
import Sidebar from "./Sidebar";
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe('Sidebar component', () => {
    /**
     * Test if header renders successfully
     */
    test('If sidebar renders', () => {
        const wrapper = shallow(<Sidebar />);
        expect(wrapper.exists()).toBe(true);
    })
    test('If sidebar has menu item', () => {
        const wrapper = shallow(<Sidebar />);
        expect(wrapper.find('Menu').length).toEqual(1);
    })
    test('If sidebar has login item', () => {
        const wrapper = shallow(<Sidebar />);
        expect(wrapper.find('Link').first().text()).toEqual("Login")
    })
      



})
