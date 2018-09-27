
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import mQDynamic from '../../index';

Enzyme.configure({ adapter: new Adapter() });


const Demo = ({ mediaQuery }) => {
  const { currentWindowWidth } = mediaQuery;
  return (
    <p>
      {` this is mobile: ${currentWindowWidth < 768 ? 'yes' : 'no'}`}
    </p>
  );
};

const config = {
  isMobile: [0, 768],
  isDesktop: [769, 9999],
};

Demo.propTypes = {
  mediaQuery: PropTypes.shape({
    currentWindowWidth: PropTypes.number.isRequired,
  }).isRequired,
};

const WrappedDemo = mQDynamic(Demo, config);

describe('media query detector', () => {
  it('shall read init Jest window size', () => {
    const tree = shallow(
      <WrappedDemo />,
    );
    expect(tree.prop('mediaQuery').currentWindowWidth).toEqual(1024);
  });

  it('shall read window after resize', () => {
    const tree = shallow(
      <WrappedDemo />,
    );

    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    expect(tree.prop('mediaQuery').currentWindowWidth).toEqual(500);
    global.innerWidth = 1024;
  });

  it('shall return feed', () => {
    const tree = shallow(
      <WrappedDemo />,
    );
    expect(tree.prop('mediaQuery').feed.isDesktop).toEqual(true);
  });

  it('shall update feed', () => {
    const tree = shallow(
      <WrappedDemo />,
    );
    global.innerWidth = 600;
    global.dispatchEvent(new Event('resize'));
    expect(tree.prop('mediaQuery').feed.isMobile).toEqual(true);
    global.innerWidth = 1024;
  });

  it('shall pass props', () => {
    const tree = shallow(
      <WrappedDemo number={4} />,
    );
    expect(tree.prop('number')).toEqual(4);
  });
});
