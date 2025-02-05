import * as React from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export default function LoginForm() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex overflow-hidden flex-col px-8 py-8 max-w-sm bg-white rounded-lg shadow-sm">
        <div className=" flex items-center justify-center text-2xl font-bold leading-none text-black">
          Welcome
        </div>
        <div className="flex w-full gap-12 mt-6 h-min justify-center max-w-full text-center">
          <div className="flex flex-col">
            <div className="self-start  text-base font-semibold text-blue-500">
              Login
            </div>
          </div>
          <div className="self-end text-base font-semibold text-gray-500">
            Register
          </div>
        </div>

        <form>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            ariaLabel="Enter your email"
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            ariaLabel="Enter your password"
          />

          <Button>Login</Button>
          <Button variant="link">Forgot Password?</Button>
        </form>
      </div>
    </div>
  );
}
