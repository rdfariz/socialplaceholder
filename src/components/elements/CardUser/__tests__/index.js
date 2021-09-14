import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Card from '../';
import { shallow } from 'enzyme';

describe('src/components/elements/CardUser', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Card title="test" id="1" body="testbody" isDetail />
    );
    expect(tree).toMatchSnapshot();
  });

  test('should return handleClick when card clicked', () => {
    const wrapper = shallow(<Card title="test" id="1" body="testbody" />);
    const card = wrapper.find('div');
    if (card.exists()) {
      card.first().simulate('click');
    }
  });
});
