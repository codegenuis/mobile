import Register from '../components'
import {reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {createUser} from '../../../api/Registration';
import PropTypes from 'prop-types';



const mapStateToProps = state => ({
  loading: state.user.loading
    })
  
  const connectedRegisterPage = connect(mapStateToProps, {createUser})(Register);
  
  export { connectedRegisterPage as default };