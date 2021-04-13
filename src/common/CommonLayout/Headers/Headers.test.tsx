import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Headers from "./Headers";
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe('Header component', () => {
    /**
     * Test if header renders successfully
     */
    test('If header renders', () => {
        const wrapper = shallow(<Headers />);
        expect(wrapper.exists()).toBe(true);
    })
    test('If header has class', () => {
        const wrapper = shallow(<Headers/>);
        expect(wrapper.find('Header').length).toEqual(1)
      })
})
