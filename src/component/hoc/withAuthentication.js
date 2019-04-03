import React from 'react';
import ROUTES from '../../constants/routes';
/**
 *
 *
 * @param {object} Component
 * @returns {object}
 */
export const withAuthentication = Component => {
  return class App extends Component {

    componentWillMount = () => {
      const getToken = localStorage.getItem('token');

      if (!getToken) {
        this.props.history.replace({ pathname: ROUTES.LOGIN });
      }
    };

    /**
     *
     *
     * @returns {object}
     */
    render() {
      return <Component {...this.props} />;
    }
  
};
};
