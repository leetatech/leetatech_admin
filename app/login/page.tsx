"use client"
import React from 'react'
import Image from 'next/image'
import { Input } from '../view/component/components/ui/input'
import { Button } from '../view/component/components/ui/button'
import { Checkbox } from '../view/component/components/ui/checkbox'
import { Label } from '../view/component/components/ui/label'
import { IoEyeOffOutline, IoPersonOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from 'react'

const Loginpage = () => {
     const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="h-screen w-screen bg-[url('/loginbackground.png')] bg-cover bg-no-repeat bg-center ">
      <div className='flex justify-center items-center h-full'>
        <div className="bg-white p-8 pb-8 rounded-sm  w-[295px] h-90 sm:w-[491px] ">
            <Image
              src="/logo.png"
              alt="Login Background"
                width={100}
                height={100}
                className="mx-auto mb-4"
            />
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Log in</h1>
        <form className="flex flex-col space-y-4">
            <Label htmlFor="email">Email</Label>
            <div className="relative w-full">
      <IoPersonOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        id="email"
        type="email"
        placeholder="Admin@leeta.com"
        className="w-full !pl-8  border border-gray-300 rounded-md px-3 py-2 
                   focus:border-transparent focus:ring-1 focus:ring-orange-500 focus:outline-none"
      />
    </div>

            <Label htmlFor="password">Password</Label>
           <div className='w-full relative'>
             <Input id="password"  type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-full border border-gray-300 rounded-md px-3 py-2 
             focus:border-transparent focus:ring-1 focus:ring-orange-500 focus:outline-none" />
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

            <div>
                <Checkbox className='data-[state=checked]:bg-orange-500 data-[state=checked]:text-white data-[state=checked]:border-orange-500"
      ' id="remember"  />
                <Label htmlFor="remember" className="ml-2">Remember me</Label>
            </div>
            <Button  type="submit" className="w-full text-white bg-orange-500">Log in</Button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Loginpage