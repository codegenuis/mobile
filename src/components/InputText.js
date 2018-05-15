import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Item, Input} from 'native-base';
const renderField = ({input, type,label, meta: {touched, error}, ...custom}) => {
    return (
     <View>
       <Item>
         <Input placeholder = {label} 
         {...input} 
         onChangeText = {input.onChange}
         value = {input.value}
         style = {styles.textInput}  
         placeholderTextColor = "#fff" 
         secureTextEntry={input.name === "password" ? true : false} />
         </Item>
         {touched && 
           ((error && <Text style={{color:'red'}}> {error} </Text>))
         }
       </View>
    )
   }
   
   const styles = StyleSheet.create({
    textInput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 2,
      color: '#fff',
      fontSize: 15,
      paddingBottom: 0
  }
   })
   export default renderField