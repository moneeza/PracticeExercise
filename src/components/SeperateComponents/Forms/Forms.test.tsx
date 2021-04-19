import { shallow, configure, mount } from 'enzyme';
import Forms from "./Forms";
import Adapter from "enzyme-adapter-react-16"
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import { Input } from 'antd'
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();
configure({ adapter: new Adapter() })
global.matchMedia = global.matchMedia || function () {
    return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

describe('Forms component', () => {
    test('If form renders', () => {
        const wrapper = mount(<Provider store={store}><Forms /></Provider>);
        expect(wrapper.exists()).toBe(true);
    })

    
    it('should call onChange prop', () => {
        const wrapper = mount(<Provider store={store}><Forms /></Provider>);
        const input = wrapper.find('Input').at(0)
        console.log(input)
        input.simulate('change', { target: { val: "moneeza@abc.com" } })
        // const val = input.props()
        const val = wrapper.find("Input").get(0).props().value
        console.log(val)
    });
    it('should call onChange prop', () => {
        const wrapper = mount(<Provider store={store}><Forms /></Provider>);
        const input = wrapper.find('select')
        expect(input.props().value).toBe("")
    })



    it('should display an error', () => {
        const wrapper = mount(<Provider store={store}><Forms /></Provider>);
        const form = wrapper.find('form')
        form.simulate('Submit');
        const rslt = wrapper.find('p.error')
        console.log(rslt);
    });
    it('submit button test', () => {
        const wrapper = mount(<Provider store={store}><Forms /></Provider>)
        expect(wrapper.find('Button').first().text()).toBe('Submit'); // The type of the Result component is success
    })
})
