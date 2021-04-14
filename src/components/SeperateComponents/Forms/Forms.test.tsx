import { shallow, configure, mount } from 'enzyme';
import Forms from "./Forms";
import Adapter from "enzyme-adapter-react-16"
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Input } from 'antd'
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


    it('it has an input', (done) => {
        let wrapper: any;
        jest.setTimeout(() => {
            wrapper = shallow(<Provider store={store}><Forms /></Provider>)
            return 
        })
        if (wrapper!==undefined) {
            setTimeout(() => {
                const prp = wrapper.find('input')

                console.log(prp)
            },100)
        }
        done()

    })


    it('dropdown test', () => {
        const wrapper = shallow(<Provider store={store}><Forms /></Provider>)
        setTimeout(() => {

            expect(wrapper.find('Button').first().text()).toBe('Submit'); // The type of the Result component is success

        }, 100)

    })

})
