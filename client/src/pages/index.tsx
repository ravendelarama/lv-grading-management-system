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
    
      <div className="w-full flex flex-col lg:flex-row min-h-screen ">
        {/* Left Side: Image */}
        <div className="hidden lg:block lg:w-3/5 relative">
          <div className="absolute inset-0 bg-blue-950/90 z-10" />
          <img
            src="https://media.licdn.com/dms/image/v2/C561BAQG8uLmppb8XOQ/company-background_10000/company-background_10000/0/1643909212326/la_verdad_christian_school_apalit_pampanga_cover?e=2147483647&v=beta&t=X7z1A71Fi6rlYqx3RhwnTpFhBnG0ew8APxcJmFH-nV8"
            alt="La Verdad Christian College Entrance"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 flex items-center gap-3 z-20">
            <img
              src="https://res.cloudinary.com/dihmqs39z/image/upload/v1731654756/LV-Logo_gjbcpk.png"
              alt="LVCC GRMS Logo"
              className="w-12 h-12"
            />
            <h2 className="text-xl font-bold text-white">LVCC GRMS</h2>
          </div>
          <div className="absolute bottom-8 left-8 right-8 text-white/90 z-20">
            <p className="text-sm leading-relaxed">
              The La Verdad Christian College or LVCC is a private non-stock, non-sectarian educational institution
              established in Apalit, Pampanga, Philippines.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col flex-1 lg:w-2/5">
          <div className="flex flex-col flex-1 items-center justify-center p-6 sm:p-8 md:p-12">
            <div className="w-full max-w-md space-y-8">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Login to LVCC GRMS</h1>
                <p className="text-gray-500">Your grading companion is just a login away</p>
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
                      placeholder="email@grms.laverdad.edu.ph"
                      required
                      className="w-full px-3 py-2"
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
                        className="w-full px-3 py-2 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
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
                  <Button type="submit" className="w-full bg-blue-950 text-white hover:bg-blue-900">
                    Login
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <Button type="button" variant="outline" className="w-full">
                    <img
                      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                      alt="Google"
                      className="w-5 h-5 mr-2"
                    />
                    Google
                  </Button>
                </div>
              </form>

              {/* Terms */}
              <p className="text-center text-sm text-gray-500">
                By clicking continue, you agree to our{" "}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default AuthenticationPage

