import React, {Component} from 'react';
import {Text, View, Image, KeyboardAvoidingView, Keyboard, ScrollView} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Button} from 'native-base';
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {styles} from './styles';
import renderField  from '../../.././components/InputText';
import Loader from '../../.././components/Loader';
import PropTypes from 'prop-types';

class Register extends Component {
  constructor(){
    super();
    this.submit = this.submit.bind(this);
  }

  submit(values){
    //const navigate = this.props.navigation
    this.props.createUser(values);
    if(values.error){
      console.log(values.errors);
      throw new SubmissionError(values.errors);
    }
  }
  
  render(){
    const {handleSubmit, invalid, pristine, reset, submitting, loading} = this.props;
    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        style={styles.container}
        scrollEnabled={false}
      >
        <Loader loading={loading} />
        <Image 
          source={require('./portalogo.png')}
          style = {{alignSelf: 'center', marginBottom: 20}}
        />
        <Text style = {styles.text}> Sign Up</Text>
        <Field name = "firstname" component = {renderField} type="text" label="First name"/>
        <Field name = "lastname" component = {renderField} type = "text" label="Last name" />
        <Field name = "email" component = {renderField} type = "email" label="Email"/>
        <Field name = "phonenumber" component = {renderField} type ="text" label="Phone number" />
        <Field name = "password" component = {renderField} type="password" label="Password"/>
        <Button block light style={styles.button} onPress = {handleSubmit(this.submit)}>
          <Text>Register</Text>
        </Button>
        <Button block light style={styles.colored}>
          <Text style={styles.btnText}>Register with Emplug</Text>
        </Button>
      </KeyboardAwareScrollView>
  
    );
  }
}



// validation of form fields
const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Required';
  } 
  else if (values.firstname.length > 15) {
    errors.firstname = 'Must be 15 characters or less';
  }
  if (!values.lastname) {
    errors.lastname = 'Required';
  } 
  else if (values.lastname.length > 15) {
    errors.lastname = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.phonenumber) {
    errors.phonenumber = 'Required';
  } else if (isNaN(Number(values.phonenumber))) {
    errors.phonenumber = 'Must be a number';
  } else if (Number(values.phonenumber) < 12) {
    errors.phonenumber = 'Sorry, number cannot be less than 12 digits';
  }
  if (!values.password){
    errors.password = 'Required';
  }
  return errors;
};

Register.propTypes = {
  createUser: PropTypes.func.isRequired
};
  

export default reduxForm({
  form: 'register',
  validate
})(Register);
  

