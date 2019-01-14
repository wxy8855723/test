import React, {Component} from 'react'
import {Form,Button,Input,Icon} from 'antd'
import logo from '../../assets/images/logo.png'
import './index.less'
const Item = Form.Item


export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className="login-header">
                    <img src={logo} alt="硅谷后台管理系统"/>
                    React项目: 后台管理系统
                </div>
                <div className='login-content'>
                    <div className='login-box'>
                        <div className='title'>用户登录</div>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        )
    }
}

class LoginForm extends Component{

    checkPassword = (rule,value,callback) => {
       if (!value) {
           callback('必须输入密码')
       } else if (value.length <4 || value.length > 8) {
           callback('密码在4-8位')
       } else {
           callback(console.log('密码校验成功'))
       }
    }

    clickLogin = () => {
       const {validateFields,resetFields} = this.props.form
       validateFields( (errer,values) => {
           if (!errer) resetFields()
           else console.log('登录失败')
       })

    }


     render () {
         const {getFieldDecorator} = this.props.form

         return (
             <Form className='login-form'>
                 <Item>
                     {getFieldDecorator('username',{
                       initialValue:'xyyy',
                       rules : [
                           {required:true,type:'string',message:'请输入用户名'},
                           {min:4,message:'长度不能小于4位'}
                       ]
                     })(
                         <Input placeholder="用户名" prefix={<Icon type="user"/>}/>
                     )}
                 </Item>
                 <Item>
                     {getFieldDecorator('password',{
                         rules: [
                             {validator:this.checkPassword}
                         ]
                     })(
                         <Input type='password' placeholder="密码" prefix={<Icon type="safety"/>}/>
                     )}
                 </Item>
                 <Item>
                     <Button className="login-form-button" type="primary" onClick={this.clickLogin}>登录</Button>
                 </Item>
             </Form>
         )
     }
}

//包装form得到form属性  用来获取表单数据和校验表单
LoginForm = Form.create()(LoginForm)