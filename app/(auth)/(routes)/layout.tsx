import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LMS (Learning Management System)',
  description: 'LMS (Learning Management System)',
}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-full items-center justify-center">{children}</div>
}
export default AuthLayout
