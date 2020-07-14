import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target;

        this.setState({ [name]:value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) return console.error('Passwords don\'t match');

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
        } catch(err){
            return console.error(err);
        }

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I DON'T HAVE AN ACCOUNT</h2>
                <span>HELP MEEEEEEEEE!!!!</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                            type='text'
                            name='displayName' 
                            value={displayName}
                            required
                            handleChange={this.handleChange} 
                            label='Display Name' />
                    <FormInput
                            type='email'
                            name='email' 
                            value={email}
                            required
                            handleChange={this.handleChange} 
                            label='Email' />
                    <FormInput
                            type='password'
                            name='password' 
                            value={password}
                            required
                            handleChange={this.handleChange} 
                            label='Password' />
                    <FormInput
                            type='password'
                            name='confirmPassword' 
                            value={confirmPassword}
                            required
                            handleChange={this.handleChange} 
                            label='Confirm Password' />


                    <CustomButton type='submit'> Sign Up, Fam! </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;