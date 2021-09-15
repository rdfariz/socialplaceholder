import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Comment from '../';
import { shallow } from 'enzyme';

describe('src/components/elements/Comment', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Comment
        id="1"
        email="rfarizinsanp@gmail.com"
        name="tester"
        body="body"
        handleUpdateComment={jest.fn()}
        handleDeleteComment={jest.fn()}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  test('should calling function delete when button delete clicked', () => {
    const onDelete = jest.fn();
    const wrapper = shallow(
      <Comment
        id="1"
        email="rfarizinsanp@gmail.com"
        name="tester"
        body="body"
        handleDeleteComment={onDelete}
      />
    );
    const btnDelete = wrapper.find('.btn-delete');
    btnDelete.first().simulate('click');
    expect(onDelete).toBeCalled();
  });
});
