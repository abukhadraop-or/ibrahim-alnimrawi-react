import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Pagination from 'components/shared/Pagination/Pagination';
import Enzyme, { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { PaginateItem } from './pagination.style';

Enzyme.configure({ adapter: new Adapter() });

describe('<pagination />', () => {
  it('should be defined', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Pagination />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be zero', () => {
    const wrapper = shallow(
      <Pagination
        pageSize={10}
        currentPage={1}
        onPageChange={jest.fn()}
        itemsCount={5}
      />
    );
    expect(wrapper.find(PaginateItem).length).toBe(0);
  });

   
  it('should be 3', () => {
    const wrapper = shallow(
      <Pagination
        pageSize={10}
        currentPage={1}
        onPageChange={jest.fn()}
        itemsCount={23}
      />
    );
    expect(wrapper.find(PaginateItem).length).toBe(3);
  });
  it('call onClick function ', () => {
    const onPageChange = jest.fn();
    const wrapper = shallow(
      <Pagination
        pageSize={10}
        currentPage={1}
        onPageChange={onPageChange}
        itemsCount={23}
      />
    );
    const pItem = wrapper.find(PaginateItem);
    pItem.at(1).simulate('click');

    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
