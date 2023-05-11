import { useState } from "react";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user);
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }
  // sign in with facebook
  const fbProvider = new FacebookAuthProvider();
  const FacebookProvider = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider)
      console.log(result)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  } 
  return (
    <div className="sign-in-cont">
      <form onSubmit={signIn}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="email/username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <div className="remember-cont">
        <p>
          <input type="checkbox" className="checkbox" /> <p className="rem">Remember me</p>
        </p>
        <NavLink className='forget-pass' to='/forget-pass'>Forget password?</NavLink>
        </div>
        <button type="submit" className="btn">
          Sign in
        </button>
        <h5 className="or-cont">OR continue with</h5>
      </form>
      <div className="socials">
        <button onClick={GoogleLogin}>
          <FcGoogle className="google" />
          Sign in with Google
        </button>
        <button onClick={FacebookProvider}>
          <AiFillFacebook className="fb" />
          Sign in with Facebook
        </button>
        <div className="create-acc">
        Don't have an account?
        <NavLink className='create-ac' to="/signup">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
