export default function login() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Please Login </h2>
        <form>
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
