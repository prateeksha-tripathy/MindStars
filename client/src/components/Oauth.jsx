import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSucess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom'

export default function Oauth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt : 'select_account'})
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider) 
            // console.log("api call here");
            const res = await fetch('api/auth/google',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name : resultsFromGoogle.user.displayName,
                    email : resultsFromGoogle.user.email,
                    googlePhotoUrl : resultsFromGoogle.user.photoURL,
                }),
            })
            // console.log(res);
            const data = await res.json()
            // console.log("data returned",data);
            if (res.ok){
                dispatch(signInSucess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Button type='button' gradientDuoTone='purpleToBlue' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-5 h-5 mr-2' />
        Continue with Google
    </Button>
  )
}
