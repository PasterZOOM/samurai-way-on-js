import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../../common/FormsControls/FormsControls'
import {required} from '../../../utils/validators/validators'




const Login = () => {

    const onSubmit = (formData)=>{
        console.log(formData)
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       name={'login'}
                       placeholder={'Login'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input}
                       name={'password'}
                       placeholder={'Password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input}
                       type={'checkbox'}
                       name={'rememberMe'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

export default Login