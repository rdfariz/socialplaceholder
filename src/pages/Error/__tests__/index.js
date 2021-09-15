import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Component from '../';

describe('src/pages/Error', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Component />
    );
    expect(tree).toMatchSnapshot();
  });
});
