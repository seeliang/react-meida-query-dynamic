import Root from '../../src/root';
import React from 'react';
import renderer from 'react-test-renderer';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Root/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
