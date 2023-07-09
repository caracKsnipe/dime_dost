export default function signup() {
  return (
    <>
      <form>
        <div className="login-header">
          <h2>Sign Up</h2>
        </div>

        <div className="login-input-section">
          <div className="name">
            <label for="Name">Full Name</label>
            <input type="text" name="Name" placeholder="Your name" />
          </div>

          <div className="email">
            <label for="Email">Email Address</label>
            <input type="email" name="Email" placeholder="you@gmail.com" />
          </div>

          <div className="password">
            <label for="Password">Password</label>
            <input
              type="password"
              name="Password"
              placeholder="Enter minimum 6 character"
            />

            <label for="confirm-Password">Confirm-Password</label>
            <input
              type="password"
              name="confirm-Password"
              placeholder="Repate your password"
            />
          </div>

          <button type="submit" className="btn">
            {" "}
            <a href="#">Sign Up</a>
          </button>
        </div>
      </form>
    </>
  );
}
