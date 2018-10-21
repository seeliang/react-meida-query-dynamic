import React, { Component } from 'react'; // eslint-disable-line
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
        currentWindowHeight: 0,
        feed: {},
      };
    }


    componentDidMount() {
      const { innerWidth, innerHeight } = window;
      this.setState({ currentWindowHeight: innerHeight });
      this.updateState(innerWidth);
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
      const { innerWidth, innerHeight } = e.target;
      this.setState({ currentWindowHeight: innerHeight });
      this.updateState(innerWidth);
    }

    render() {
      return <RenderComponent mediaQuery={{ ...this.state }} {...this.props} />;
    }
  }
  MQD.displayName = `MQD(${getDisplayName(RenderComponent)})`;


  return MQD;
};

export default mQDynamic;
