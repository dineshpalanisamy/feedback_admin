var assert = require('assert');
import {expect} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import {shallow} from 'enzyme'

describe('<Header ?>',function(){
  it ('contains the header component', function(){
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).to.have.length(1);
  })
})
describe('<Search ?>',function(){
  it ('contains the search component', function(){
    const wrapper = shallow(<App />);
    expect(wrapper.find('Search')).to.have.length(1);
  })
})
