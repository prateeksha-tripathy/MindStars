import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

export default function SignUp() {
  return (
    <div className='min-h-screen'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10'>
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
          You can Sign Up using your email and password or with Google.
        </p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value = "Your Username" />
              <TextInput type='text' placeholder='Enter your username' id='username' />
            </div>
            <div>
              <Label value = "Your Email" />
              <TextInput type='text' placeholder='name@company.com' id='email' />
            </div>
            <div>
              <Label value = "Your Username" />
              <TextInput type='text' placeholder='Enter your password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit'>Sign Up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-3'>
            <span>Already have an account ? </span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
