import React from "react";
import { Link, Outlet } from "react-router-dom";

const Guest = () => {
  return (
    <div>
      <div className="flex w-[30%] justify-between m-auto mb-10">
        {/* <Link to={'/guest/signupPage'}>
          <button>Signup</button>
        </Link>
        <Link to={'/guest/loginPage'}>
          <button>Login</button>
        </Link> */}
      </div>
      <div>
      <Outlet />
      </div>

    </div>
  );
};

export default Guest;
