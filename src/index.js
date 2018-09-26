import React, { Component } from 'react';
import debounce from 'debounce';

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';

const result = (arr, value) => arr[0] <= value && value <= arr[1];

const generateFeed = (winWidth, options) => Object.keys(options).reduce(
  (r, i) => Object.assign({}, r, { [i]: result(options[i], winWidth) }),
  {},
);

const mQDynamic = (RenderComponent, setting) => {
  class MQD extends Component {
    constructor() {
      super();
      this.state = {
        currentWindowWidth: 0,
        feed: {},
      };
    }


    componentDidMount() {
      const initWinWidth = window.innerWidth;
      this.updateState(initWinWidth);
      window.addEventListener('resize', (e) => {
        debounce(this.handleResize(e), 300);
      });
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleScroll);
    }

    updateState(width) {
      this.setState({
        currentWindowWidth: width,
      });

      if (setting) {
        this.setState({
          feed: generateFeed(width, setting),
        });
      }
    }

    handleResize(e) {
      const curWinWidth = e.target.innerWidth;
      this.updateState(curWinWidth);
    }

    render() {
      return <RenderComponent mediaQuery={{ ...this.state }} {...this.props} />;
    }
  }
  MQD.displayName = `MQD(${getDisplayName(RenderComponent)})`;


  return MQD;
};

export default mQDynamic;
