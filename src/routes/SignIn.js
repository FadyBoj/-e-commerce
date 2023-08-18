import React from 'react'


//Components

import Header from '../components/NewHeader';
import Footer from '../components/Footer';

//Icons
import googleSvg from '../assests/google.svg'
import Shoperz from '../components/shoperz';
import { BiErrorCircle as Error } from 'react-icons/bi';

const SignIn = () => {

    const [windowWidth,setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() =>{
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize',handleResize);

        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    })

    //handle form data

    const [formData,setFormData] = React.useState({
        email : '',
        password: ''
    });

    const [validData,setValidData] = React.useState(true);

    const handleInputs = (event) =>{
        const {name,value} = event.target;

        setFormData((prevData) =>{
            return {...prevData,[name]:value}
        })
    }

    const emailRef = React.useRef();
    const emailInputRef = React.useRef();

    const passwordRef = React.useRef();
    const passwordInputRef = React.useRef();

    //handle submit

    const handleSubmit = (e) =>{
        e.preventDefault();
        const emailErrorMsg = [];
        const passwordErrorMsg = [];

        if(formData.email.length === 0)
        emailErrorMsg.push('Email is required');

        if(formData.email.length < 4)
        emailErrorMsg.push('Email can\'t be less than 5 characters');

        if(!formData.email.includes('@') || !formData.email.endsWith('.com'))
        emailErrorMsg.push('Please enter a valid email address');
        
        if(emailErrorMsg.length > 0 )
        {
            emailRef.current.style.display = 'flex';
            emailRef.current.textContent = emailErrorMsg[0];
            emailInputRef.current.style.cssText = 'outline:solid 2px #ff3333';
            setValidData(false);
        }

        else{
            emailRef.current.style.display = 'none';
            emailRef.current.textContent = '';
            emailInputRef.current.style.cssText = 'outline:solid 2px #3e52d5';

            setValidData(true);
        }

        //Password

        if(formData.password.length === 0)
        passwordErrorMsg.push('Password is required');
    
        if(formData.password.length < 8)
        passwordErrorMsg.push('Please enter a valid password');

        if(passwordErrorMsg.length > 0)
        {
            passwordRef.current.style.display = 'flex';
            passwordRef.current.textContent = passwordErrorMsg[0];
            passwordInputRef.current.style.cssText = 'outline:solid 2px #ff3333';

            setValidData(false);
        }
        else{
            passwordRef.current.style.display = 'none';
            passwordRef.current.textContent = '';
            passwordInputRef.current.style.cssText = 'outline:solid 2px #3e52d5';
            setValidData(true);
        }
    }

  return (
    <div className='sign-in-section'>
        <Shoperz width={windowWidth > 400 ? 200 : 150}/><br/>
        <h2 className='sign-main-title'>Welcome to Shoperz</h2>
        <p className='sign-main-p'>Fill up your infotmation below to log in to your account</p>
        <form onSubmit={handleSubmit} className='sign-in-form'>
            <div className='sign-input-cont'>

                <div className='inpt-title'>
                    <p >Email address</p>
                </div>

                <div >
                    <input onChange={handleInputs}
                    name='email'
                    value={formData.email}
                    className='sign-email'
                    type='text'
                    ref={emailInputRef}
                     />

                </div>

                <div ref={emailRef} className='error-cont'>
                    <div>
                     <Error className='error-icon' size={20} />
                    </div>
                    <div>
                    Error
                    </div>
                </div>

            </div>

            <div className='sign-input-cont'>

                <div>
                    <p className='inpt-title' >Password</p>
                </div>

                <div>
                    <input onChange={handleInputs}
                    name='password'
                    value={formData.password}
                    className='sign-email'
                    ref={passwordInputRef}
                    type='password' />
                </div>

                <div ref={passwordRef} className='error-cont'>
                    <div>
                     <Error className='error-icon' size={20} />
                    </div>
                    <div>
                    Error
                    </div>
                </div>

            </div>

            <button className='sign-submit-btn' type='submit'>Log in</button>
            

            <div className='google-btn'>
                <div className='google-svg-cont'><img className='google-svg' alt='google' src={googleSvg}/></div>
                <div>Sign in with Google </div>
            </div>


            <div className='help-cont'>
                <p className='help'>For further support, you may visit the Help Center or contact our customer service team.</p>
                <p className='copy-rights'>&#xA9; Shoperz | all righs reserved</p>
            </div>

        </form>
    </div>
  )
}

export default SignIn