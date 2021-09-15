import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Card from '../';

describe('src/components/elements/CardPhoto', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Card
        title="title"
        thumbnail="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        url="https://google.com"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
