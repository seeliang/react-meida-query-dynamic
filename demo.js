import React, { Fragment, useEffect, useState } from 'react';
import * as Client from 'react-dom/client';
import PropTypes from 'prop-types';
import mQDynamic from './src';

const Informer = () => {
  const [width,setWidth] = useState(0)
  const [height,setHeight] = useState(0)
  const handleResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    setWidth(innerWidth);
    setHeight(innerHeight);
  }
  useEffect(() => {
    window.addEventListener('resize',
      handleResize)
    return () => {
      window.removeEventListener('resize',
      handleResize)
    }
  },[])
  return (
    <b>{width}: {height}</b>
  )
}

const Demo = ({ mediaQuery }) => {
  const { currentWindowWidth } = mediaQuery;
  const [isShowing,setInformer] = useState(true)
  const handle = (e) => {
    setInformer(!isShowing)
  }

  return (
    <Fragment>
      <button onClick={e => handle(e)}>toggle</button>
    {isShowing? <Informer/>: ''}
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
