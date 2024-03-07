import { ToastContainer } from "react-toastify";

const ResetPassword = () => {
  return (
    <section>
      <ToastContainer />
      <div className="productBox w-fit m-auto flex flex-col">
        <h2 className="primary uppercase text-center pb-2">Forgot Password?</h2>
        <hr />
        <p className="primary text-lg font-semibold py-2">
          Please enter your email address to reset your password
        </p>
        <div className="flex flex-col">
          <label className="primary">
            <input
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Email Address *</span>
          </label>
          <label className="primary">
            <input
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              type="password"
              className="inputField h-14"
              required
            />
            <span className="placeholder">Password *</span>
          </label>
          <button className="btn w-fit m-auto mt-4">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
