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

describe('src/components/elements/CardPost', () => {
  const props = {
    title: 'title',
    id: '1',
    body: 'tesbody',
    userId: '10'
  };

  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Card {...props} isDetail />
    );
    expect(tree).toMatchSnapshot();
  });
  
  test('should calling function edit when button edit clicked', () => {
    const onDelete = jest.fn();
    const wrapper = shallow(<Card {...props} handleDeletePost={onDelete} isDetail />);
    const btnDelete = wrapper.find('.btn-delete');
    btnDelete.first().simulate('click');
    expect(onDelete).toBeCalled();
  });

  test('should return handleClick when card clicked', () => {
    const wrapper = shallow(<Card {...props} />);
    const card = wrapper.find('.card_post');
    if (card.exists()) {
      card.first().simulate('click');
    }
  });
  
  test('should return handleClick when card detail clicked', () => {
    const wrapper = shallow(<Card {...props} isDetail />);
    const card = wrapper.find('.card_post');
    if (card.exists()) {
      card.first().simulate('click');
    }
  });
});
