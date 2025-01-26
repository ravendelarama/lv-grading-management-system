

import { InputOTPWithSeparator } from "@/components/InputOTPSeparator"
import LandingLeftSide from "@/components/landing-page-component/LeftSide"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const VerficationOTP: React.FC = () => {

  const navigate = useNavigate();

  const handleVerification = () => {
    navigate('/successful-otp')
  }


  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen">
      {/* Landing Left side component */}
      <LandingLeftSide />

      {/* Right Side */}
      <div className="flex flex-col flex-1 lg:w-2/5">
        <div className="flex flex-col items-center justify-center flex-1 p-6 sm:p-8 md:p-12">
          <div className="w-full max-w-md space-y-8 text-center">
            <div className="flex flex-col items-center space-y-4">
         
              <h1 className="text-2xl font-bold text-blue-950">Verify Your Account</h1>
              <InputOTPWithSeparator/>
              <p className="text-gray-500">
                Enter your one time password 
              </p>
            </div>
            <Button onClick={handleVerification} className=" bg-blue-950 text-white hover:bg-blue-900 w-28 " >
              Verify 
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerficationOTP

