import { mapStateToProps, mapDispatchToProps } from '../index';

jest.mock('../action');
jest.mock('../component');
jest.mock('../reducer');

describe('src/pages/Home/index', () => {
  test('mapStateToProps', () => {
    const mockState = {
      root: {
        isLoading: false,
        isError: false
      }
    };
    const props = mapStateToProps(mockState);
    expect(props.root.isLoading).toEqual(false);
    expect(props.root.isError).toEqual(false);
  });

  test('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).actions.getPosts();
    mapDispatchToProps(dispatch).actions.addPost();
    mapDispatchToProps(dispatch).actions.insertData();
    mapDispatchToProps(dispatch).actions.setData();
    mapDispatchToProps(dispatch).actions.setError();
    mapDispatchToProps(dispatch).actions.setLoading();
    expect(dispatch).toHaveBeenCalled();
  });
});
