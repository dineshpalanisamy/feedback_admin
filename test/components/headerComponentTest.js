var assert = require('assert');
import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
import {shallow} from 'enzyme';

describe('Header Component',() => {
  it('Should be equal to Feedback Admin',() => {
    const wrapper = shallow(<Header />);
    expect('Feedback Admin').to.equal(wrapper.find('h1').props().children);
  });
  it('The header should be of blue color',() =>{
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').props().style).to.not.be.undefined;
  });
  it('The header should be of blue color',() =>{
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').props().style.color).to.equal("#808080");
  });
})
