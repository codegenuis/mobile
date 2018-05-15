import Verification from '../components/verification'
import {reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {createUser} from '../../../api/Registration';
import PropTypes from 'prop-types';



const mapStateToProps = state => ({
  loading: state.user.loading
    })
  
  const connectedRegisterPage = connect(mapStateToProps, {createUser})(Verification);
  
  export { connectedRegisterPage as default };