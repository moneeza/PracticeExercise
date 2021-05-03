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


    it('should call onChange prop on 1st input', () => {
        const wrapper = mount(<Provider store={store}><Forms /></Provider>);
        const input1 = wrapper.find('input').at(0)
        input1.simulate('change', { target: { value: "moneeza@abc.com" } })
        const input2 = wrapper.find('input').at(1)
        input2.simulate('change', { target: { value: "abc@123" } })
        const input3 = wrapper.find('input').at(2)
        input3.simulate('change', { target: { value: "abc@123" } })
        const form = wrapper.find('form')
        const input4 = wrapper.find("Cascader").at(0)
        const input5 = wrapper.find("Select").at(0).props().value
        input5.simulate("change", { target: { value: "female" } })
        console.log(input5)
        wrapper.update()
    });
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
