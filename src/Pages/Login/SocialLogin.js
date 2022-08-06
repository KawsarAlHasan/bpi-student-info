import React from 'react';
import googleImg from '../../Images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';

const SocialLogin = (props) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    let erroElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        erroElement = <div>
            <p className='text-danger'>Error: {error?.message}  </p>
        </div>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            {erroElement}
            <div onClick={() => signInWithGoogle()} className="form-control">
                <button className="btn btn-info"><img style={{ width: '50px' }} className='img-fluid px-2' src={googleImg} alt="" /> Google sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;