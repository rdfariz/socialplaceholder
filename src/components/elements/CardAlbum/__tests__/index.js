import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CardAlbum from '../';
import { shallow } from 'enzyme';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('src/components/elements/CardAlbum', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <CardAlbum title="title" id="id" userId="10" />
    );
    expect(tree).toMatchSnapshot();
  });
  
  test('should return handleClick when card clicked', () => {
    const wrapper = shallow(<CardAlbum title="title" id="id" userId="10" />);
    const card = wrapper.find('.card_album');
    if (card.exists()) {
      card.first().simulate('click');
    }
  });
});
