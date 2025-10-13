"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Input } from "../view/component/components/ui/input"
import { Button } from "../view/component/components/ui/button"
import { Checkbox } from "../view/component/components/ui/checkbox"
import { Label } from "../view/component/components/ui/label"
import { IoEyeOffOutline, IoPersonOutline, IoEyeOutline } from "react-icons/io5"

// Simple skeleton loader
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
)

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [accessDenied, setAccessDenied] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // simulate login failure
      setAccessDenied(true)
    }
  }

  const handleGoBack = () => {
    setAccessDenied(false)
  }

  return (
    <div className="h-screen w-screen bg-[url('/loginbackground.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      {isLoading ? (
        // 🦴 FORM-SHAPED SKELETON
        <div className="bg-white p-8 pb-8 rounded-sm w-[295px] sm:w-[491px] shadow-lg space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="w-20 h-20 rounded-full" />
            <Skeleton className="w-40 h-6" />
          </div>

          <div className="space-y-4 mt-6">
            <div>
              <Skeleton className="w-16 h-4 mb-2" />
              <Skeleton className="w-full h-10 rounded-md" />
            </div>

            <div>
              <Skeleton className="w-20 h-4 mb-2" />
              <Skeleton className="w-full h-10 rounded-md" />
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <Skeleton className="w-4 h-4 rounded-sm" />
              <Skeleton className="w-24 h-4" />
            </div>

            <Skeleton className="w-full h-10 rounded-md mt-4" />
          </div>
        </div>
      ) : !accessDenied ? (
        // ✅ LOGIN FORM
        <div className="bg-white p-8 pb-8 rounded-sm w-[295px] sm:w-[491px] shadow-lg transition-all duration-300">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold mb-4 text-center">Admin Log in</h1>
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <Label htmlFor="email">Email</Label>
            <div className="relative w-full">
              <IoPersonOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Admin@leeta.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full !pl-8 border rounded-md px-3 py-2 focus:ring-1 focus:ring-orange-500 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}

            <Label htmlFor="password">Password</Label>
            <div className="w-full relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full border rounded-md px-3 py-2 focus:ring-1 focus:ring-orange-500 focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {showPassword ? (
                <IoEyeOffOutline
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <IoEyeOutline
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}

            <div className="flex items-center">
              <Checkbox
                className="data-[state=checked]:bg-orange-500 data-[state=checked]:text-white data-[state=checked]:border-orange-500"
                id="remember"
              />
              <Label htmlFor="remember" className="ml-2">
                Remember me
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full text-white bg-orange-500 hover:bg-orange-600"
            >
              Log in
            </Button>
          </form>
        </div>
      ) : (
        // ⚠️ ACCESS DENIED MODAL
        <div className="bg-white rounded-md pb-4 p-10 text-center w-[300px] sm:w-[600px] shadow-lg">
          <Image
            src="/material-symbols_warning.png"
            alt="Access Denied"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h2 className="text-base font-semibold text-red-500 mb-2">
            Access Denied
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            You don’t have permission to perform this action.
          </p>
          <Button
            onClick={handleGoBack}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs h-[32px] w-24"
          >
            Go Back
          </Button>
        </div>
      )}
    </div>
  )
}

export default Loginpage
