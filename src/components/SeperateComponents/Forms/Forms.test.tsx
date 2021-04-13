import { shallow, configure } from 'enzyme';
import Forms from "./Forms";
import Adapter from "enzyme-adapter-react-16"
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();
configure({ adapter: new Adapter() })


describe('Forms component', () => {
    /**
     * Test if header renders successfully
     */
    test('If form renders', () => {
        const wrapper = shallow(<Provider store={store}><Forms /></Provider>);
        expect(wrapper.exists()).toBe(true);
    })

    it('submit event when click submit', () => {
        const wrapper = shallow(<Provider store={store}><Forms /></Provider>)
        setTimeout(() => {

            const form = wrapper.find('Form').first();
            form.simulate('submit');
            console.log(wrapper.find('p.error').first().text()
            )
            expect(
                wrapper.find('p.error').first().text()
            ).toBe('');
        }, 100)

    });
    it('must contain input', () => {
        const wrapper = shallow(<Provider store={store}><Forms /></Provider>)
        setTimeout(() => {

            const uname = wrapper.find('Input')

            expect(uname.props().value()).toEqual("abcd@gmail.com")
        }, 100)

    })
    it('dropdown test', () => {
        const wrapper = shallow(<Provider store={store}><Forms /></Provider>)
        setTimeout(() => {

            expect(wrapper.find('Button').first().text()).toBe('Submit'); // The type of the Result component is success

        }, 100)

    })

})