import React from 'react';
import App from './App';
import { shallow, configure, mount } from 'enzyme'
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


describe('App1', () => {
  it("renders without crashing", () => {
    shallow(<Provider store={store}><App /></Provider>);
  });
  })
