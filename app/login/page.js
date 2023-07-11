export default function login() {
  return (
    <>
      <form>
        <div className="login-header">
          <h2>Login fhdkjglsfjlsfmsk</h2>
        </div>

        <div className="login-register">
          <p>
            Do not have an account yet?
            <a href="/signup" className="signup-link">
              Sign up
            </a>
          </p>
        </div>

        <div className="login-input-section">
          <div className="email">
            <label for="Email">Email Address</label>
            <input type="email" name="Email" placeholder="you@gmail.com" />
          </div>
          <div className="password">
            <div className="anchor">
              <label for="Password">Password</label>
              <a href="#" className="signup-link">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              name="Password"
              placeholder="Enter 6 character and a special character or more"
            />
          </div>
          <input type="checkbox" name="checkbox" /> Remember me?
          <button type="submit" className="btn">
            {" "}
            <a href="#">Log In</a>
          </button>
        </div>
        <hr />
        <h6>in login with</h6>
        <div className="social-login">
          <a href="#" className="signup-link">
            Google
          </a>
          <a href="#" className="signup-link">
            Facebook
          </a>
        </div>
      </form>
    </>
  );
}
