'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOut = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-background-50 rounded-xl">
      <h2 className="text-xl font-semibold">Sign Out</h2>
      <span className="w-full h-[2px] block bg-background-100"></span>
      <p>Are you sure you want to sign out?</p>
      <button
        className="p-4 bg-accent-200 text-primary-600 rounded-xl hover:bg-primary-600 hover:text-txt-50 transition-colors ease-in-out"
        onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  )
}

export default SignOut
