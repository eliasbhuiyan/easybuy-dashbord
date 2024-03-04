import { Link } from "react-router-dom";
import ThreeDanim from "../ThreeDanim";

const Login = () => {
  return (
    <section className="h-screen bg-slate-100">
      <div className="container h-full relative flex items-center">
        <ThreeDanim />
        <form className="productBox w-2/5 flex flex-col">
          <h2 className="title">Sign In To Your Account</h2>
          <label className="primary">
            <input type="email" className="inputField h-14" required />
            <span className="placeholder">Email Address *</span>
          </label>
         
          <label className="primary">
            <input type="password" className="inputField h-14" required />
            <span className="placeholder">Password *</span>
          </label>
          <button className="btn w-1/2 m-auto mt-4">Sign In</button>
          <p className="mt-4 text-center">
            Don&apos;t have an account? {" "}
            <Link to='/registration' className="text-brand">
              Sign up here.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
