
import React from 'react';
import renderer from 'react-test-renderer';
import {it, expect} from 'jest';

import Enzyme from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Root from '../../root';

Enzyme.configure({ adapter: new Adapter() });

it('matches snapshot', () => {
  const tree = renderer.create(
    <Root/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('has input',() => {
  const tree = mount(
    <Root/>
  );
  expect(tree.find('input')).toHaveLength(1);
});
