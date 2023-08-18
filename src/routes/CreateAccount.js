import React from 'react'

//Icons
import Shoperz from '../components/shoperz';
import { BiErrorCircle as Error } from 'react-icons/bi';
import googleSvg from '../assests/google.svg'

const CreateAccount = () => {

    //handle window width
    const [windowWidth,setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() =>{
        const handleResize = (e)=>{
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize',handleResize);

        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    })

    //handle form data
    const [formData,setFormData] = React.useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })


    const handleInput = (event) =>{
        const  {name,value} = event.target;

        setFormData((prevData) =>{
            return {...prevData,[name]:value};
        })
    }

    //handle form validation

    const checkSpecial = (password)=>{
        let next = false;

        const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        for(let i = 0; i < specialChars.length; i++)
        {
            if(password.includes(specialChars[i]))
            {
                next = true;
                break;
            }
            
        }
        return next 

    }

    const checknum = (password) =>{
        let next = false
        const nums = [0,1,2,3,4,5,6,7,8,9];
        nums.forEach((num) =>{
            if(password.includes(String(num)))
            {
                next = true;
            }
        })

        return next;
    }

    const isValidPassword = (password) =>{

        if(!checkSpecial(password) || !checknum(password))
        return false;

        return true
    }
    
    const firstnameErr = React.useRef();
    const lastnameErr = React.useRef();
    const emailErr = React.useRef();
    const passwordErr = React.useRef();

    const firstErrMsg = React.useRef();
    const lastErrMsg = React.useRef();
    const emailErrMsg = React.useRef();
    const passwordErrMsg = React.useRef();

    const firstInput = React.useRef();
    const lastInput = React.useRef();
    const emailInput = React.useRef();
    const passwordInput = React.useRef();


    const formSubmit = (e) =>{
        e.preventDefault();
        let isValid = true;
        const firstNameErrorMsg = [];
        const lastNameErrorMsg = [];
        const emailErrorMsg = [];
        const passwordErrorMsg = [];
        
        //First name
        if(formData.firstname.length === 0 )
        firstNameErrorMsg.push('First name is required');

        if(formData.firstname.length < 4)
        firstNameErrorMsg.push('First must be 4 characters or more');

        if(firstNameErrorMsg.length > 0)
        {   
            firstInput.current.style.cssText = 'outline:solid 2px #ff3333';
            firstnameErr.current.style.display = 'flex';
            firstErrMsg.current.textContent = firstNameErrorMsg[0];
            isValid = false;
        }
        else{
            firstInput.current.style.cssText = 'outline:solid 2px #3e52d5'
            firstnameErr.current.style.display = 'none';
            firstErrMsg.current.textContent =  '';
                    }

        //Last name

        if(formData.lastname.length === 0 )
        lastNameErrorMsg.push('last name is required');

        if(formData.lastname.length < 4)
        lastNameErrorMsg.push('last must be 4 characters or more');

        if(lastNameErrorMsg.length > 0)
        {   
            lastInput.current.style.cssText = 'outline:solid 2px #ff3333';
            lastnameErr.current.style.display = 'flex';
            lastErrMsg.current.textContent = lastNameErrorMsg[0];
            isValid = false;
        }
        else{
            lastInput.current.style.cssText = 'outline:solid 2px #3e52d5'
            lastnameErr.current.style.display = 'none';
            lastErrMsg.current.textContent =  '';
                    }

        // email
        if(formData.email.length === 0)
        emailErrorMsg.push('Email is required');

        if(formData.email.length < 5 || !formData.email.includes('@') || !formData.email.endsWith('.com'))
        emailErrorMsg.push('Please enter a vaild email address');

        if(emailErrorMsg.length > 0)
        {   
            emailInput.current.style.cssText = 'outline:solid 2px #ff3333';
            emailErr.current.style.display = 'flex';
            emailErrMsg.current.textContent = emailErrorMsg[0];
            isValid = false;
        }
        else{
            emailInput.current.style.cssText = 'outline:solid 2px #3e52d5'
            emailErr.current.style.display = 'none';
            emailErrMsg.current.textContent =  '';
                    }

        //Password

        if(formData.password.length === 0 )
        passwordErrorMsg.push('Password is required');

        if(formData.password.length < 8 )
        passwordErrorMsg.push('Password must be 8 characters or more');

        if(!isValidPassword(formData.password))
        passwordErrorMsg.push('Password must contains numer and a special character');

        if(passwordErrorMsg.length > 0)
        {
            passwordInput.current.style.cssText = 'outline:solid 2px #ff3333';
            passwordErr.current.style.display = 'flex';
            passwordErrMsg.current.textContent = passwordErrorMsg[0];
            isValid = false;
        }

        else{
            passwordInput.current.style.cssText = 'outline:solid 2px #3e52d5';
            passwordErr.current.style.display = 'none';
            passwordErrMsg.current.textContent = '';
            
        }

        console.log(isValid ? "Submitted" : "Not valid")

    }   


  return (
    <div className='create-account-section'>

        <Shoperz width={windowWidth > 400 ? 160 : 150}/><br/>
        <h2 className='sign-main-title'>Welcome to Shoperz</h2>
        <p className='sign-main-p'>Fill up your infotmation below to log in to your account</p>

        <form onSubmit={formSubmit} className='create-account-form'>
           
            <div className='first-last'>
                
                <div className='inpt-container'>

                    <div className='label'>First name</div>
                    <div><input ref={firstInput} onChange={handleInput}
                     className='create-inpt' placeholder='Enter First name' name='firstname' type='text'/></div>
                    <div ref={firstnameErr} className='err-container'>
                        <div><Error className='err-icon' size={18}/></div>
                        <div ref={firstErrMsg}>Error</div>
                    </div>
                </div>

                
                <div className='inpt-container'>

                    <div className='label'>Last name</div>
                    <div><input ref={lastInput} onChange={handleInput} 
                    className='create-inpt' placeholder='Enter Last name' name='lastname' type='text'/></div>
                    <div ref={lastnameErr} className='err-container'>
                        <div><Error className='err-icon' size={18}/></div>
                        <div ref={lastErrMsg}>Error</div>
                    </div>
                </div>

            </div>

            <div className='create-email-cont'>
                <div className='label'>Email </div>
                <div><input ref={emailInput} onChange={handleInput}
                 placeholder='Enter your email address' className='create-email'  name='email' type='text' /></div>
                <div ref={emailErr} className='err-container'>
                        <div><Error className='err-icon' size={18}/></div>
                        <div ref={emailErrMsg}>Error</div>
                </div>
            </div>

            <div className='create-email-cont'>
                <div className='label'>Password</div>
                <div><input ref={passwordInput} onChange={handleInput}
                 placeholder='•••••••••••••' className='create-email'  name='password' type='password' /></div>
                <div ref={passwordErr} className='err-container'>
                        <div><Error className='err-icon' size={18}/></div>
                        <div ref={passwordErrMsg}>Error</div>
                </div>
            </div>

            <button className='sign-submit-btn' type='submit'>Log in</button>

            <div className='google-btn'>
                <div className='google-svg-cont'><img className='google-svg' alt='google' src={googleSvg}/></div>
                <div>Sign in with Google</div>
            </div>

            <div className='help-cont'>
                <p className='help'>For further support, you may visit the Help Center or contact our customer service team.</p>
                <p className='copy-rights'>&#xA9; Shoperz | all righs reserved</p>
            </div>

        </form>

    </div>
  )
}

export default CreateAccount