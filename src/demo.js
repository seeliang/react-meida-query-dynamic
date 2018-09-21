import React, { Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import mQDynamic from '.';


const Demo = ({ mediaQuery }) => {
  const { currentWindowWidth } = mediaQuery;
  return (
    <p>
      {` this is mobile: ${currentWindowWidth < 768 ? 'yes' : 'no'}`}
    </p>
  );
};

Demo.propTypes = {
  mediaQuery: PropTypes.shape({
    currentWindowWidth: PropTypes.number.isRequired,
  }).isRequired,
};

const Demo1 = ({ mediaQuery }) => {
  const { currentWindowWidth } = mediaQuery;
  return (
    <p>
      {`current: ${currentWindowWidth}`}
    </p>
  );
};

Demo1.propTypes = {
  mediaQuery: PropTypes.shape({
    currentWindowWidth: PropTypes.number.isRequired,
  }).isRequired,
};

const config = {
  isMobile: [0, 768],
  isDesktop: [769, 9999],
};

const Wrapped = mQDynamic(Demo1);

const WrappedDemo = mQDynamic(Demo, config);

const DemoRoot = () => (
  <Fragment>
    <Wrapped />
    <WrappedDemo />
  </Fragment>
);

render(<DemoRoot />, document.getElementById('app'));
