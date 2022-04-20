import React, { Fragment, useState } from 'react';
import * as Client from 'react-dom/client';
import PropTypes from 'prop-types';
import mQDynamic, {useMediaQueryDynamic} from './src';

const Demo = ({ mediaQuery }) => {
  const { currentWindowWidth } = mediaQuery;
  const [isShowing,setInformer] = useState(true)
  const {width, height} = useMediaQueryDynamic();
  const handle = (e) => {
    setInformer(!isShowing)
  }

  return (
    <Fragment>
      <button onClick={e => handle(e)}>toggle</button>
    {isShowing?   <b>{width}: {height}</b>: ''}
    <p>
      {` this is mobile: ${currentWindowWidth < 768 ? 'yes' : 'no'}`}
    </p>
    </Fragment>
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

const initialRoot = document.getElementById('app')

const root = Client.createRoot(initialRoot)

root.render(<DemoRoot />);
