import LandingLeftSide from "@/components/landing-page-component/LeftSide"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const SuccessfulOTP: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen">
      {/* Landing Left side component */}
      <LandingLeftSide />

      {/* Right Side */}
      <div className="flex flex-col flex-1 lg:w-2/5">
        <div className="flex flex-col items-center justify-center flex-1 p-6 sm:p-8 md:p-12">
          <div className="w-full max-w-md space-y-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Account Verification Successful</h1>
              <p className="text-gray-500">
                Your account has been successfully verified. You can now proceed to login.
              </p>
            </div>
            <Button className="w-full bg-blue-950 text-white hover:bg-blue-900" >
              Continue 
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessfulOTP

