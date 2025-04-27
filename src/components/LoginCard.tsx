import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import Image from "next/image";

  export function LoginCard() {
    return (
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white rounded-lg shadow-md mx-4 sm:mx-auto">
        <div className="flex justify-center">
          <Image
            src="/mizizi-learning-hub-logo.png"
            alt="Mizizi Learning Hub Logo"
            width={180}
            height={120}
            className="w-36 h-24 sm:w-48 sm:h-32 object-contain"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900">
          Mizizi Inventory
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full text-sm sm:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full text-sm sm:text-base"
            />
          </div>
          <Button
            variant="default"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 sm:py-2.5"
          >
            Sign in
          </Button>
        </div>
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-gray-300 hover:bg-gray-50 text-sm sm:text-base py-2 sm:py-2.5"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                fill="#4285F4"
              />
              <path
                d="M12 4C15.3137 4 18 6.68629 18 10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10C6 6.68629 8.68629 4 12 4ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
                fill="#34A853"
              />
              <path
                d="M12 16C8.68629 16 6 13.3137 6 10H8C8 12.2091 9.79086 14 12 14V16Z"
                fill="#FBBC05"
              />
              <path
                d="M18 10C18 13.3137 15.3137 16 12 16V14C14.2091 14 16 12.2091 16 10H18Z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </Button>
        </div>
      </div>
    );
  }