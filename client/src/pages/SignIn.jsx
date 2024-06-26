import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSucess, signInFailure } from '../redux/user/userSlice';
import Oauth from '../components/Oauth';

export default function SignIn() {

  const [formData,setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error : errorMessage } = useSelector (state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim()});      // in case someone uses spaces before writing , we use trim()
  }
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !formData.email ||!formData.password){
      return dispatch(signInFailure("Please fill all the fields"))
    }
    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data);
      if(data.success === false) {
        dispatch(signInFailure(data.message));  
      }
 
      if(res.ok){
        dispatch(signInSucess(data));
        navigate('/');
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false);
      dispatch(signInFailure(error.message))                           // To do : invalid password error in ui
      
    }
  }

  return (
    <div className='min-h-screen'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10 mt-20'>
        {/* left side*/}
        <div className='flex-1'>
        <Link to = '/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg text-white'>MindStars</span>
            Blog
        </Link>
        <p className='text-sm mt-5'>      
          "MindStars: Where Minds Meet to Shine Bright."
        </p>
        <p className='text-sm'>
          You can Sign In using your email and password or with Google.
        </p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value = "Your Email" />
              <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value = "Password" />
              <TextInput type='password' placeholder='**********' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>{
              loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading ...</span>
                </>
              ) : 'Sign In'
            }
            </Button>
            <Oauth />
          </form>
          <div className='flex gap-2 text-sm mt-3'>
            <span>Don't have an account ? </span>
            <Link to='/sign-up' className='text-blue-500'>Sign Up</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
