import { useState } from "react";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <div className="sign-in-cont">
        <form onSubmit={signIn}>
          <h1>Create an account</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <p>
            <input type="checkbox" className="checkbox" />{" "}
            <h6 className="check"> remember me</h6>
          </p>
          <button type="submit" className="btn">
            Sign up
          </button>
          <h5 className="or-cont">OR continue with</h5>
        </form>
        <div className="socials">
          <button>
            <FcGoogle className="google"/>
            Sign up with Google
          </button>
          <button>
            <AiFillFacebook className="fb" />
            Sign up with Facebook
          </button>
        </div>
        <div className="create-acc">
        Already have an account?
        <NavLink className='create-ac' to="/signin">Sign in</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
