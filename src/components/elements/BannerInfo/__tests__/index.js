import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import BannerInfo from '../';

describe('src/components/elements/BannerInfo', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <BannerInfo label="test" title="title" subtitle="test subtitle" />
    );
    expect(tree).toMatchSnapshot();
  });
});
