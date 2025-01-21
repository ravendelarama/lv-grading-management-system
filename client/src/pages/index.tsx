"use client"

import type React from "react"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const AuthenticationPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex p-4 md:p-8 lg:p-24">
      <div className="w-full flex flex-col lg:flex-row overflow-hidden border border-gray-300 rounded-3xl  ">
        {/* Left Side: Image */}
        <div className="hidden lg:block lg:w-3/5 ">
          <img
            src="https://media.licdn.com/dms/image/v2/C561BAQG8uLmppb8XOQ/company-background_10000/company-background_10000/0/1643909212326/la_verdad_christian_school_apalit_pampanga_cover?e=2147483647&v=beta&t=X7z1A71Fi6rlYqx3RhwnTpFhBnG0ew8APxcJmFH-nV8"
            alt="La Verdad Christian College Entrance"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col flex-1 lg:w-1/2">
          <div className="flex flex-col flex-1 items-center justify-center p-6 sm:p-8 md:p-12">
            <div className="w-full max-w-md space-y-8">
              {/* Logo and Title */}
              <div className="flex items-center gap-3">
                <img
                  src="https://res.cloudinary.com/dihmqs39z/image/upload/v1731654756/LV-Logo_gjbcpk.png"
                  alt="LVCC GMS Logo"
                  className="w-20 h-20 "
                />
                <h2 className="text-xl font-extrabold text-gray-900 ">LVCC GMRS</h2>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-semibold text-gray-800">Welcome back! Sign in here.</h1>
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="@laverdad.edu.ph"
                      required
                      className="w-full px-3 py-2 bg-gray-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="w-full px-3 py-2 bg-gray-50 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-900 hover:text-gray-500"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <div className="space-y-4">
                  <Button type="submit" className="w-full hover:bg-gray-200 hover:text-gray-800 " variant='outline'>
                    Sign in
                  </Button>

                  <Button type="button" variant="outline" className="w-full  bg-blue-950 text-gray-50 hover:bg-blue-900 hover:text-gray-100">
                    <img
                      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                      alt="Google"
                      className="w-5 h-5 mr-2"
                    />
                    Or sign in with Google
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-600 ">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-blue-600 hover:underline">
                    Sign up now
                  </a>
                </div>
              </form>

              {/* Footer */}
              <footer className="text-center text-xs text-gray-500 pt-8">
                © 2024 LA VERDAD CHRISTIAN COLLEGE INC.
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthenticationPage

