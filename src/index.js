import React, { Component } from 'react';
import debounce from 'debounce';

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';

const mQDynamic = (RenderComponent) => {
  class MQD extends Component {
    constructor() {
      super();
      this.state = {
        currentWindowWidth: 0,
      };
    }

    componentDidMount() {
      const initWinWidth = window.innerWidth;
      this.setState({ currentWindowWidth: initWinWidth });
      window.addEventListener('resize', (e) => {
        debounce(this.handleResize(e), 300);
      });
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleScroll);
    }

    handleResize(e) {
      const curWinWidth = e.target.innerWidth;
      this.setState({ currentWindowWidth: curWinWidth });
    }

    render() {
      return <RenderComponent mediaQuery={{ ...this.state }} {...this.props} />;
    }
  }
  MQD.displayName = `MQD(${getDisplayName(RenderComponent)})`;


  return MQD;
};

export default mQDynamic;
