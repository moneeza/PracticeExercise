import React from 'react';
import App1 from './Form';
import { shallow, configure, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Button } from 'antd'
import { render, screen } from '@testing-library/react';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();
configure({ adapter: new Adapter() })


describe('App1', () => {
  it("renders without crashing", () => {
    shallow(<Provider store={store}><App1 /></Provider>);
  });
  it('submit event when click submit', () => {
    const wrapper = shallow(<Provider store={store}><App1 /></Provider>)
    setTimeout(() => {

      const form = wrapper.find('form').first();
      form.simulate('submit');
      console.log(wrapper.find('p.error').first().text()
      )
      expect(
        wrapper.find('p.error').first().text()
      ).toBe('');
    }, 100)

  });
  it('must contain input', () => {
    const wrapper = shallow(<Provider store={store}><App1 /></Provider>)
    setTimeout(() => {
      const uname = wrapper.find('input')
      console.log(JSON.stringify(uname))
      expect(uname.props().value).toEqual("abcd@gmail.com")
    }, 100)
  })
  it('dropdown test', () => {
    const wrapper = shallow(<Provider store={store}><App1 /></Provider>)
    console.log(wrapper.find('button').props())
    // expect(wrapper.find('Button').prop('type')).toBe('Submit'); // The type of the Result component is success


  })


})
