import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Footers from "./Footers";
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe('Footer component', () => {
    /**
     * Test if header renders successfully
     */
    test('If header renders', () => {
        const wrapper = shallow(<Footers />);
        expect(wrapper.exists()).toBe(true);
    })
    test('If header has class', () => {
        const wrapper = shallow(<Footers />);
        expect(wrapper.find('Footer').length).toEqual(1)
    })
})
