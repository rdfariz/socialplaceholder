import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Card from '../';
import { shallow } from 'enzyme';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

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
    const card = wrapper.find('.card_user');
    if (card.exists()) {
      card.first().simulate('click');
    }
  });
  
  test('should return handleClick when card detail clicked', () => {
    const wrapper = shallow(<Card title="test" id="1" body="testbody" isDetail />);
    const card = wrapper.find('.card_user');
    if (card.exists()) {
      card.first().simulate('click');
    }
  });
});
