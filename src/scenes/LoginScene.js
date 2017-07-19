import React, { PureComponent } from 'react'
import {
  View,
  Text
} from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'
import moment from 'moment'

export default class LoginScene extends PureComponent {  
  static navigationOptions = {
    title: '登录',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: '#fff'
      }
    })
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <GiftedForm
        formName='loginForm'
        clearOnClose={true}
        defaults={{
          /*
          username: 'Farid',
          'gender{M}': true,
          password: 'abcdefg',
          country: 'FR',
          birthday: new Date(((new Date()).getFullYear() - 18)+''),
          */
        }}
        validators={{
          username: {
            title: '登录文件',
            validate: [{
              validator: 'isLength',
              arguments: [3, 16],
              message: '{TITLE} 登录文件不能为空'
            },{
              validator: 'matches',
              arguments: /^[a-zA-Z0-9]*$/,
              message: '{TITLE} can contains only alphanumeric characters'
            }]
          },
          password: {
            title: '密码',
            validate: [{
              validator: 'isLength',
              arguments: [6, 16],
              message: '{TITLE} 密码必须是6到16位'
            }]
          }
        }}
      >
        <GiftedForm.SeparatorWidget />
        <GiftedForm.TextInputWidget
          name='用户名'
          title='用户名'
          placeholder='请选择您的登录文件'
          clearButtonMode='while-editing'
          onTextInputFocus={(currentText = '') => {
            if (!currentText) {
              let fullName = GiftedFormManager.getValue('signupForm', 'fullName');
              if (fullName) {
                return fullName.replace(/[^a-zA-Z0-9-_]/g, '');
              }
            }
            return currentText;
          }}
        />

        <GiftedForm.TextInputWidget
          name='密码' // mandatory
          title='密码'
          placeholder='请输入6到16位密码'
          clearButtonMode='while-editing'
          secureTextEntry={true}
        />

        <GiftedForm.ErrorsWidget/>

        <GiftedForm.SubmitWidget
          title='登录'
          widgetStyles={{
            submitButton: {
              backgroundColor: '#009cff',
            }
          }}
          onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
            if (isValid === true) {
              // prepare object
              values.gender = values.gender[0];
              values.birthday = moment(values.birthday).format('YYYY-MM-DD');

            }
          }}
        />

        <GiftedForm.NoticeWidget
          title='请注意保存您的登录文件，不要轻易让人知道您的wifi密匙'
        />
        <View style={{
          flexDirection: 'row-reverse',
          padding: 10
        }}><Text style={{
          color: '#009cff'
        }} onPress={() => {
          navigate('Regist')
        }}>立即注册</Text><Text>没有账户？</Text></View>
      </GiftedForm>
    )
  }
}