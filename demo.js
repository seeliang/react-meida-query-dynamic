import React, { Fragment, useState } from 'react';
import * as Client from 'react-dom/client';
import PropTypes from 'prop-types';
import mQDynamic, {useMediaQueryDynamic} from './src';

const HookDemo = () => {
  const [isShowing,setInformer] = useState(true)
  const {width, height} = useMediaQueryDynamic();
  const handle = (e) => {
    setInformer(!isShowing)
  }

  return (
    <Fragment>
      <button onClick={e => handle(e)}>toggle</button>
    {isShowing?   <b>{width}: {height}</b>: ''}

    </Fragment>
  );
};

const Demo1 = ({ mediaQuery }) => {
  const { currentWindowWidth } = mediaQuery;
  return (
    <p>
      {` this is mobile: ${currentWindowWidth < 768 ? 'yes' : 'no'}`}
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

const WrappedDemo = mQDynamic(Demo1, config);

const DemoRoot = () => (
  <Fragment>
    <HookDemo />
    <WrappedDemo />
  </Fragment>
);

const initialRoot = document.getElementById('app')

const root = Client.createRoot(initialRoot)

root.render(<DemoRoot />);
