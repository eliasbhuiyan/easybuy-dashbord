import ThreeDanim from "../ThreeDanim";

const Registration = () => {
  return (
    <section className="h-screen bg-slate-100">
      <div className="container h-full relative flex items-center">
        <ThreeDanim />
        <form className="productBox w-1/2 flex flex-col">
          <h2 className="title">Create Account</h2>
          <label className="primary">
            <input type="text" className="inputField h-14" required />
            <span className="placeholder">Username *</span>
          </label>
          <label className="primary">
            <input type="email" className="inputField h-14" required />
            <span className="placeholder">Email Address *</span>
          </label>
          <label className="primary">
            <input type="number" className="inputField h-14" required />
            <span className="placeholder">Phone *</span>
          </label>
          <label className="primary">
            <input type="text" className="inputField h-14" required />
            <span className="placeholder">Address *</span>
          </label>
          <label className="primary">
            <input type="password" className="inputField h-14" required />
            <span className="placeholder">Password *</span>
          </label>
          <button className="btn w-1/2 m-auto mt-4">Register</button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <a href="#login" className="text-brand">
              Log in here.
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Registration;
