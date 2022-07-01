import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../../common/FormsControls/FormsControls'
import {required} from '../../../utils/validators/validators'
import {connect} from 'react-redux'
import {login} from '../../../redux/authReduser'
import {Navigate} from 'react-router-dom'
import style from './Login.module.css'

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to="/profile"/>
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
                       name={'email'}
                       placeholder={'Email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input}
                       name={'password'}
                       type={'password'}
                       placeholder={'Password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input}
                       type={'checkbox'}
                       name={'rememberMe'}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)