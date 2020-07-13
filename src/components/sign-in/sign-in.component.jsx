import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = e => {
        const {name, value} = e.target;

        this.setState({ [name]:value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email:'', password:''});
    }

    render(){
        return (
            <div className='sign-in' onSubmit={this.handleSubmit}>
                <h2>SIGN IN, YOU CLOWN</h2>
                <span>DO IT... DO IT <span role='img' aria-label='palpatine'>👴</span></span>

                <form>
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        label='email' />
                    <FormInput 
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                        label='password' />
                    <div className='buttons'>
                        <CustomButton type='submit'> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;