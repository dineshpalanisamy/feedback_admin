var assert = require('assert');
import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../components/search';
import {shallow} from 'enzyme';

describe ('Search Component', () => {
  const wrapper = shallow(<Search />);
  it('Is Available', () => {
    expect(wrapper).to.not.be.undefined;
  });
  it('has input field', () => {
    expect(wrapper.find('input')).to.be.length(1);
  });
  it('has Text Box',() => {
    expect(wrapper.find('input').node.props.type).to.equal('text');
  });
  it('Text Box has empty children',() => {
    console.log(wrapper.find('input').node.props);
    expect(wrapper.find('input').node.props).to.not.have.property('children')
  });
});
