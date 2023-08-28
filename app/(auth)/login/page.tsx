import Link from "next/link";

export default function Login() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <Link href="/" className="item-center mb-6 flex text-lg font-semibold">
        Phantom
      </Link>
      <div className="w-full text-clip rounded-lg  border bg-black shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Sign in to your account
          </h1>
          <form action="#" className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    type="checkbox"
                    aria-describedby="remember"
                    id="remember"
                    className="h-4 w-4 rounded border bg-gray-50 "
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="">
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm font-medium underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-950 px-5 py-2.5 text-center text-sm font-medium text-white border hover:bg-black"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
